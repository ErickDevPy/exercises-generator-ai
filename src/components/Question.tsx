import { useQuestion } from "~/hooks/useQuestion";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionOptions } from "./QuestionOptions";
import { QuestionExplanation } from "./QuestionExplanation";

interface QuestionProps {
    number: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
}

export function Question({question, number, options, answer, explanation}: QuestionProps) {
    const { selectedOption, showExplanation, onOptionChange } = useQuestion({number});
    return (
        <div className="question-card">
            <QuestionHeader number={number} question={question}/>
            <QuestionOptions options={options} answer={answer} selectedOption={selectedOption} onOptionChange={onOptionChange}/>
            <QuestionExplanation showExplanation={showExplanation} explanation={explanation}/>
        </div>
    )
}