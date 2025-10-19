import { generateQuestions } from "~/services";
import type { Exercises, History } from "~/types";

interface generateExerciseListParams {
    apiKey: string | null;
    subjects: string[] | string;
    history: History | undefined;
    reference?: string;
    difficulty: string;
    exercisesNumber: number;
    updateHistory?: (history: History) => void;
    addQuestions?: (exercises: Exercises) => void;
}

export async function generateExerciseList({ apiKey, subjects, reference, history, difficulty, exercisesNumber, updateHistory, addQuestions }: generateExerciseListParams) {
    if (!apiKey) throw new Error('API key is required');
    
    let currentHistory = history
    
    if (typeof subjects === 'string') subjects = subjects.split(',')

    if (!currentHistory) {
        currentHistory = {}; 
        subjects.map(sub => currentHistory![sub] = []); 
    }

    const questionPromises = subjects.map(subject => {
        const historyForSubject = currentHistory![subject];

        return generateQuestions({ apiKey, subject, reference, history: historyForSubject, difficulty, exercisesNumber, addQuestions });
    });

    const results = await Promise.all(questionPromises);

    const questions = results.flat();

    if (updateHistory) updateHistory(currentHistory)

    return { questions };
}