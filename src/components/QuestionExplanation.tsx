interface QuestionExplanationProps {
    showExplanation: boolean;
    explanation: string;
}

export function QuestionExplanation({ showExplanation, explanation }: QuestionExplanationProps) {
    if (!showExplanation) return null

    return (
        <div className="explanation-container">
            <h4 className="explanation-title">
                Explanation:
            </h4>
            <p className="text-sm leading-relaxed">
                {explanation}
            </p>
        </div>
    );
}