import { generateQuestions } from "~/services";
import type { History } from "~/types";

interface generateExerciseListParams {
    apiKey: string | null;
    subjects: string[] | string;
    history: History | undefined;
    reference?: string;
    difficulty: string;
    exercisesNumber: number;
}

export async function generateExerciseList({ apiKey, subjects, reference, history, difficulty, exercisesNumber }: generateExerciseListParams) {
    if (!apiKey) throw new Error('API key is required');
    
    let currentHistory = history;
    
    if (typeof subjects === 'string') subjects = subjects.split(',')

    if (!currentHistory) {
        currentHistory = {}; 
        subjects.map(sub => currentHistory![sub] = []); 
    }

    const questionPromises = subjects.map(subject => {
        const historyForSubject = currentHistory![subject];

        return generateQuestions({ apiKey, subject, reference, history: historyForSubject, difficulty, exercisesNumber});
    });

    const results = await Promise.all(questionPromises);

    const questions = results.flat(); 

    return {
        subjects,
        reference,
        difficulty,
        history: currentHistory,
        exercisesNumber,
        questions
    }
}