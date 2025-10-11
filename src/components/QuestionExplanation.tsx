interface QuestionExplanationProps {
    showExplanation: boolean;
    explanation: string;
}

export function QuestionExplanation({ showExplanation, explanation }: QuestionExplanationProps) {
    if (!showExplanation) return null

    return (
        <div className="mt-4 p-4 bg-gray-100 border-l-4 border-indigo-500 rounded-md shadow-inner text-gray-700">
            <h4 className="font-semibold text-sm mb-2 text-gray-800">
                Explanation:
            </h4>
            <p className="text-sm leading-relaxed">
                {explanation}
            </p>
        </div>
    );
}