import { useLocation } from "react-router-dom";
import { generateExerciseList } from "~/utils";

export function useExercisesPage() {
    const location = useLocation();
    const params = location.state || {};

    const { subjects, reference, difficulty, exercisesNumber } = params;

    const onGenerateExercises = async () => {
        const apiKey = localStorage.getItem('key');
        const result = await generateExerciseList({ apiKey, subjects, reference, difficulty, exercisesNumber, history: undefined});
        console.log(result);
    }
    
    return {
        onGenerateExercises
    };
}