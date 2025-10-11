import { useState } from "react";


export function useQuestion() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const onOptionChange = (option: string) => {
        setSelectedOption(option);
        setShowExplanation(true);
    }

    return {
        selectedOption,
        showExplanation,
        onOptionChange
    };
}