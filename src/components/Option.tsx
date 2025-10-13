interface OptionProps {
    value: string;
    answer: string;
    selectedOption: string | null;
    onChange: (value: string) => void;
}

export function Option({value, answer, selectedOption, onChange}: OptionProps) {
    const isDisabled = selectedOption !== null;

    const selectedBg = selectedOption
        ? (value === answer ? 'bg-green-300' : 'bg-red-400')
        : '';

    const disabledStyle = isDisabled ? 'pointer-events-none' : '';

    return (
        <button disabled={isDisabled} onClick={() => onChange(value)} className={`question-option ${selectedBg} ${disabledStyle}`}> 
            {value}
        </button>
    );
}