import { GoogleGenAI } from "@google/genai";
import { createPrompt, delay } from "~/utils";
import type { Exercises } from "~/types";
import { EXERCISE_RESPONSE_SCHEMA } from "~/types";
import Bottleneck from "bottleneck";

const MAX_REQUESTS = 10;
const TIME_WINDOW_MS = 60000;
const limiter = new Bottleneck({
    maxConcurrent: 10,
    minTime: TIME_WINDOW_MS / MAX_REQUESTS
});

interface generateQuestionsParams {
    apiKey: string;
    subject: string;
    reference?: string;
    history: string[];
    difficulty: string;
    exercisesNumber: number;
}

export async function generateQuestions({ apiKey, subject, reference, history, difficulty, exercisesNumber }: generateQuestionsParams): Promise<Exercises> {
    const ai = new GoogleGenAI({apiKey});
    const model = "gemini-2.5-flash";
    const prompt = createPrompt({ subject, reference, history, difficulty, exercisesNumber });

    const apiCallFn = () => ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: EXERCISE_RESPONSE_SCHEMA,
            temperature: 0.2,
            maxOutputTokens: 4096,
        }
    });

    try {
        const response = await limiter.schedule(apiCallFn);

        if (!response || !response.text) {
            throw new Error('Error generating questions');
        }
        
        const jsonText = response.text.trim();

        const exercises = JSON.parse(jsonText) as Exercises;

        if (history) {
            history.push(...exercises.flatMap(ex => ex.question));
        }

        const missingQuestions = exercisesNumber - exercises.length;
        
        if (missingQuestions === 0) return exercises;

        await delay(6000); 

        const remainingQuestions: Exercises = await generateQuestions({ apiKey, subject, reference, history, difficulty, exercisesNumber: missingQuestions });

        return [...exercises, ...remainingQuestions]; 
    } catch (error) {
        console.error("Error generating questions:", error);
        throw error;
    }
}