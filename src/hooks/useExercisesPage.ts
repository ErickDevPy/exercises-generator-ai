import { useState } from "react";
import { useLocation } from "react-router-dom";
import type { Exercises } from "~/types";
import { generateExerciseList } from "~/utils";

export function useExercisesPage() {
    const location = useLocation();
    const params = location.state || {};
    const { subjects, reference, difficulty, exercisesNumber } = params;
    const [questions, setQuestions] = useState<Exercises>([]);
    const [loading, setLoading] = useState(false);
    
    const addQuestions = (newQuestions: Exercises) => {
        setQuestions(prev => [...prev, ...newQuestions]);
    }

    const onGenerateExercises = async () => {
        setLoading(true);
        const apiKey = localStorage.getItem('key');
        await generateExerciseList({ apiKey, subjects, reference, difficulty, exercisesNumber, history: undefined, addQuestions});
        console.log(questions);
        setLoading(false);
    }
    
    return {
        loading,
        onGenerateExercises
    };
}