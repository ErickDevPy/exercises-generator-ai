import { useNavigate } from "react-router-dom";

export function useMenuPage() {
    const navigate = useNavigate();

    const onGoToConfig = () => {
        navigate('/config');
    }
    
    return {
        onGoToConfig
    }
}