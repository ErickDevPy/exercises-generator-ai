import { generateQuestions } from "~/services";
import type { History } from "~/types";

interface generateExerciseListParams {
    subjects: string[] | string;
    history: History | undefined;
    reference?: string;
    difficulty: string;
    exercisesNumber: number;
}

export async function generateExerciseList({ subjects, reference, history, difficulty, exercisesNumber }: generateExerciseListParams) {
    let currentHistory = history;
    
    if (typeof subjects === 'string') subjects = subjects.split(',')

    if (!currentHistory) {
        currentHistory = {}; 
        subjects.map(sub => currentHistory![sub] = []); 
    }

    const questionPromises = subjects.map(subject => {
        const historyForSubject = currentHistory![subject];

        return generateQuestions({subject, reference, history: historyForSubject, difficulty, exercisesNumber});
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