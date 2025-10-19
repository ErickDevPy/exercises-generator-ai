import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Exercises, History } from "~/types";
import { generateExerciseList } from "~/utils";

const SESSION_KEY = 'current_session_exercises';
const HISTORY_KEY = 'current_session_history';

export function useExercisesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = location.state || {};
    const { subjects, reference, difficulty, exercisesNumber } = params;
    const [questions, setQuestions] = useState<Exercises>([]);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState<History | undefined >();
    
    const addQuestions = (newQuestions: Exercises) => {
        setQuestions(prev => [...prev, ...newQuestions]);
    }

    const updateHistory = (newHistory: History) => {
        setHistory(newHistory);
        sessionStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    }

    const clearForNextGeneration = () => {
        sessionStorage.clear();
        setQuestions([]);
    }

    const onGenerateExercises = async () => {
        setLoading(true);
        clearForNextGeneration();
        try {
            const apiKey = localStorage.getItem('key');
            await generateExerciseList({ apiKey, subjects, reference, difficulty, exercisesNumber, history, updateHistory, addQuestions});
        } catch (error) {
            console.error("Error generating exercises:", error);
        } finally {
            setLoading(false);
        }
    }

    const restoreExercises = () => {
        const storedExercises = sessionStorage.getItem(SESSION_KEY);
        if (storedExercises) {
            try {
                setQuestions(JSON.parse(storedExercises));
            } catch (error) {
                console.error("Error loading stored exercises:", error);
            }
        }
    }

    const restoreHistory = () => {
        const storedHistory = sessionStorage.getItem(HISTORY_KEY)
         if (storedHistory) {
            try {
                setHistory(JSON.parse(storedHistory));
            } catch (error) {
                console.error("Error loading stored history:", error);
            }
        }
    }

    const onGoPreviousPage = () => {
        navigate(-1);
    }

    useEffect(() => {
        restoreExercises()
        restoreHistory()
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