interface QuestionExplanationProps {
  showExplanation: boolean;
  explanation: string;
}

export function QuestionExplanation({ showExplanation, explanation }: QuestionExplanationProps) {
  if (!showExplanation) return

  return (
    <div>
      <h4>Explanation:</h4>
      <p className="explanation-text">{explanation}</p>
    </div>
  );
}