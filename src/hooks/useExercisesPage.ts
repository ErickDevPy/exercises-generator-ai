import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Exercises } from "~/types";
import { generateExerciseList } from "~/utils";

const SESSION_KEY = 'current_session_exercises'; 

export function useExercisesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = location.state || {};
    const { subjects, reference, difficulty, exercisesNumber } = params;
    const [questions, setQuestions] = useState<Exercises>([]);
    const [loading, setLoading] = useState(false);

    const onGoPreviousPage = () => {
        navigate(-1);
    }
    
    const addQuestions = (newQuestions: Exercises) => {
        setQuestions(prev => [...prev, ...newQuestions]);
    }

    const onGenerateExercises = async () => {
        setLoading(true);
        try {
            const apiKey = localStorage.getItem('key');
            await generateExerciseList({ apiKey, subjects, reference, difficulty, exercisesNumber, history: undefined, addQuestions});
            console.log(questions);
        } catch (error) {
            console.error("Error generating exercises:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const storedExercises = sessionStorage.getItem(SESSION_KEY);
        
        if (storedExercises) {
            try {
                setQuestions(JSON.parse(storedExercises));
            } catch (e) {
                console.error("Erro ao carregar exercises do sessionStorage:", e);
            }
        }
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
             sessionStorage.setItem(SESSION_KEY, JSON.stringify(questions));
        }
    }, [questions]); 
    
    return {
        questions,
        loading,
        onGenerateExercises,
        onGoPreviousPage
    };
}