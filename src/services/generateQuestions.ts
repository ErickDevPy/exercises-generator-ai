import { GoogleGenAI } from "@google/genai";
import { createPrompt } from "~/utils";
import type { Exercises } from "~/types";
import { EXERCISE_RESPONSE_SCHEMA } from "~/types";

interface generateQuestionsParams {
    subject: string;
    reference?: string;
    history?: string[];
    difficulty: string;
    exercisesNumber: number;
}

export async function generateQuestions({ subject, reference, history, difficulty, exercisesNumber }: generateQuestionsParams) {
    const ai = new GoogleGenAI({});
    const model = "gemini-2.5-flash";
    const prompt = createPrompt({ subject, reference, history, difficulty, exercisesNumber });

    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: EXERCISE_RESPONSE_SCHEMA,
                temperature: 0.2,
                maxOutputTokens: 4096,
            }
        })

        if (!response || !response.text) {
            throw new Error('Error generating questions');
        }
        
        const jsonText = response.text.trim();

        const exercises = JSON.parse(jsonText) as Exercises;

        return exercises;
    } catch (error) {
        console.error("Error generating questions:", error);
        throw error;
    }
}