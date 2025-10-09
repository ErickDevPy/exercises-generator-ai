import { GoogleGenAI } from "@google/genai";
import { createPrompt } from "~/utils";
import type { Exercises } from "~/types";
import { EXERCISE_RESPONSE_SCHEMA } from "~/types";
import Bottleneck from "bottleneck";

const MAX_REQUESTS = 10;
const TIME_WINDOW_MS = 60000;
const limiter = new Bottleneck({
    maxConcurrent: 10,
    minTime: TIME_WINDOW_MS / MAX_REQUESTS
});
const MAX_HISTORY_SIZE = 50;

interface generateQuestionsParams {
    apiKey: string;
    subject: string;
    reference?: string;
    history: string[];
    difficulty: string;
    exercisesNumber: number;
    addQuestions?: (exercises: Exercises) => void;
}

export async function generateQuestions({ apiKey, subject, reference, history, difficulty, exercisesNumber, addQuestions }: generateQuestionsParams): Promise<Exercises> {
    const ai = new GoogleGenAI({apiKey});
    const model = "gemini-2.5-flash";
    const prompt = createPrompt({ subject, reference, history, difficulty, exercisesNumber });

    const apiCallFn = () => ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: EXERCISE_RESPONSE_SCHEMA,
            systemInstruction: "You are a professional quiz generator. Your ONLY output MUST be the JSON object strictly adhering to the schema. **CRITICAL RULE**: All questions must be mathematically sound, and the final 'answer' field MUST be one of the strings exactly present in the 'options' array. The 'explanation' must be concise and free of any self-correction or discussion of errors/inconsistencies. Do NOT generate inconsistent questions.",
            temperature: 0.5
        }
    });

    try {
        const response = await limiter.schedule(apiCallFn);

        console.log("API response received:", response);

        if (!response || !response.text) {
            throw new Error('Error generating questions');
        }
        
        const jsonText = response.text.trim();

        const exercises = JSON.parse(jsonText) as Exercises;

        if (history) {
            history.push(...exercises.flatMap(ex => ex.question));
            if (history.length > MAX_HISTORY_SIZE) {
                history.splice(0, history.length - MAX_HISTORY_SIZE);
            }
        }

        const missingQuestions = exercisesNumber - exercises.length;

        if (addQuestions) addQuestions(exercises);
        
        if (missingQuestions === 0) return exercises;

        const remainingQuestions: Exercises = await generateQuestions({ apiKey, subject, reference, history, difficulty, exercisesNumber: missingQuestions, addQuestions });

        return [...exercises, ...remainingQuestions]; 
    } catch (error) {
        console.error("Error generating questions:", error);
        throw error;
    }
}