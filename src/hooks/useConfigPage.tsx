import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function useConfigPage() {
    const navigate = useNavigate();
    
    const [apiKeyValue, setApiKeyValue] = useState<string>(
        localStorage.getItem('key') || ''
    );

    const onApiKeyChange = (value: string) => {
        localStorage.setItem('key', value);
        setApiKeyValue(value);
    }
    
    const onBackToMenu = () => {
        navigate('/');
    }

    return {
        apiKeyValue,
        onApiKeyChange,
        onBackToMenu
    }
}