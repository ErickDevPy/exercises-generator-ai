interface QuestionHeaderProps {
    number: number;
    question: string;
}

export function QuestionHeader({number, question}: QuestionHeaderProps) {
    return (
        <div >
            <h2>Question {number}</h2>
            <p>{question}</p>
        </div>
    );
}