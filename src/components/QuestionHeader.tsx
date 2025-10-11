interface QuestionHeaderProps {
    number: number;
    question: string;
}

export function QuestionHeader({number, question}: QuestionHeaderProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-100">
            <h2 className="question-counter">
                Question {number}
            </h2>
            <p className="question">
                {question}
            </p>
        </div>
    );
}