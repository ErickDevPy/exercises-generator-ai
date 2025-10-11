import { Option } from "./Option";

interface QuestionOptionsProps {
    options: string[];
    answer: string;
    selectedOption: string | null;
    onOptionChange: (option: string) => void;
}

export function QuestionOptions({options, answer, selectedOption, onOptionChange}: QuestionOptionsProps) {
    return (
        <div className="flex flex-col gap-5 my-2 p-2">
            {options.map((option, index) => (
                <Option key={index} value={option} answer={answer} selectedOption={selectedOption} onChange={onOptionChange}/>
            ))}
        </div>
    )
}