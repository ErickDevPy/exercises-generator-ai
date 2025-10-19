import { useNavigate } from "react-router-dom";

export function useMenuPage() {
    const navigate = useNavigate();

    const onGoToExercisesParams = () => {
        navigate('/exercises-params');
    }

    const onGoToConfig = () => {
        navigate('/config');
    }
    
    return {
        onGoToExercisesParams,
        onGoToConfig
    }
}