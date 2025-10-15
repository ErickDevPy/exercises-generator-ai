import { useState } from "react";

const getSessionKey = (number: number) => `question_state_${number}`;

export function useQuestion({number} : {number: number}) {
    const key = getSessionKey(number);
    const storedState = sessionStorage.getItem(key);
    
    const initialValues = storedState 
        ? JSON.parse(storedState) 
        : { selected: null };
        
    const [selectedOption, setSelectedOption] = useState<string | null>(initialValues.selected);

    const onOptionChange = (option: string) => {
        setSelectedOption(option);
        const newState = {
            selected: option,
        };
        
        sessionStorage.setItem(key, JSON.stringify(newState));
    }

    const showExplanation = selectedOption !== null;
    
    return {
        selectedOption,
        showExplanation,
        onOptionChange
    };
}