import { Option } from "./Option";

interface QuestionOptionsProps {
    options: string[];
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

export function QuestionOptions({options, selectedOption, onOptionChange}: QuestionOptionsProps) {
    return (
        <div>
            {options.map((option, index) => (
                <Option key={index} value={option} selected={selectedOption === option} onChange={onOptionChange}/>
            ))}
        </div>
    )
}