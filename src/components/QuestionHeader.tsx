interface QuestionHeaderProps {
    number: number;
    question: string;
}

export function QuestionHeader({number, question}: QuestionHeaderProps) {
    return (
        <div>
            <h2 className="question-counter">
                Question {number}
            </h2>
            <p className="question">
                {question}
            </p>
        </div>
    );
}