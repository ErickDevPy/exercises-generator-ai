interface OptionProps {
    value: string;
    answer: string;
    selectedOption: string | null;
    onChange: (value: string) => void;
}

export function Option({value, answer, selectedOption, onChange}: OptionProps) {

    const bgColor = selectedOption
        ? (value === answer ? 'bg-green-300' : 'bg-red-300')
        : 'bg-white';

    return (
        <button onClick={() => onChange(value)} className={`question-option ${bgColor}`}> 
            {value}
        </button>
    );
}