import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {  EXERCISE_PARAMS_SCHEMA, type ExerciseParamsData, type ExerciseParamsInput } from "~/types";

export function useExercisesParamsPage() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<ExerciseParamsInput, any, ExerciseParamsData>({ 
        resolver: zodResolver(EXERCISE_PARAMS_SCHEMA),
        defaultValues: {
            subjects: "",
            reference: "",
            difficulty: 'easy',
            exercisesNumber: '10', 
        },
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<ExerciseParamsData> = (data) => {
        const { subjects, reference, difficulty, exercisesNumber } = data
        onGoToExercisesPage(subjects, reference, difficulty, exercisesNumber)
    }

    const onGoToExercisesPage = async (subjects: string, reference: string | undefined, difficulty: string, exercisesNumber: number) => {
        navigate('/exercises', {
            state: { subjects, reference, difficulty, exercisesNumber }
        });
    }

    const onBackToMenu = () => {
        navigate('/');
    }

    return {
        register,
        handleSubmit,
        formState,
        onSubmit,
        onBackToMenu
    };
}