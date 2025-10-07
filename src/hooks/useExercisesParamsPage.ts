import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const onGoToExercisesPage = async () => {
        navigate('/exercises', {
            state: { subjects, reference, difficulty, exercisesNumber }
        });
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
        onGoToExercisesPage,
        onBackToMenu
    };
}