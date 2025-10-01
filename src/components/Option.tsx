interface OptionProps {
    value: string;
    selected: boolean;
    onChange: (value: string) => void;
}

export function Option({value, selected, onChange}: OptionProps) {
    return (
        <button onClick={() => onChange(value)} className={selected ? 'bg-green-300' : 'bg-gray-500'}> 
            <label>{value}</label>
        </button>
    );
}