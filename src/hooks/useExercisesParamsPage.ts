import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateExerciseList } from "~/utils";

export function useExercisesParamsPage() {
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState('');
    const [reference, setReference] = useState('');
    const [difficulty, setDifficulty] = useState('Easy');
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const [exercisesNumber, setExercisesNumber] = useState(5);

    const onSubjectsChange = (newSubjects: string) => {
        setSubjects(newSubjects);
    }

    const onReferenceChange = (newReference: string) => {
        setReference(newReference);
    }

    const onDifficultyChange = (newDifficulty: string) => {
        setDifficulty(newDifficulty);
    }

    const onExercisesNumberChange = (newNumber: number) => {
        setExercisesNumber(newNumber);
    }

    const onGenerateExercises = async () => {
        const apiKey = localStorage.getItem('key');
        const questions = await generateExerciseList({ apiKey, subjects, reference, difficulty, exercisesNumber, history: undefined});
        console.log(questions);
        return questions;
    }

    const onBackToMenu = () => {
        navigate('/');
    }

    return {
        subjects,
        reference,
        exercisesNumber,
        difficulty,
        difficulties,
        onSubjectsChange,
        onReferenceChange,
        onExercisesNumberChange,
        onDifficultyChange,
        onGenerateExercises,
        onBackToMenu
    };
}