import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateQuestions } from "~/services";

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
        const questions = [];
        const arrayOfSubjects = subjects.split(',');
        for (let subject of arrayOfSubjects) {
            const generatedQuestions = await generateQuestions({
                subject,
                reference,
                difficulty,
                exercisesNumber,
            });

            questions.push(generatedQuestions);

            console.log('Generated questions:', generatedQuestions);
        }

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