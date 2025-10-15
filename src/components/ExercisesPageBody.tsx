import type { Exercises } from "~/types";
import { QuestionsList } from "./QuestionsList";
import { FileQuestion } from 'lucide-react'; 

export function ExercisesPageBody({questions}: {questions: Exercises}) {
    const hasQuestions = questions.length > 0;

    return (
        <div className="flex flex-col h-screen items-center hide-scrollbar overflow-y-scroll p-30">
            {hasQuestions ? (
                <QuestionsList exercises={questions} />
            ) : (
                <div className="exercises-empty-container">
                    <FileQuestion 
                        className="exercises-empty-icon" 
                    />
                    <p className="text-2xl font-medium">No exercises found</p>
                    <p className="text-xl">Please try generating new exercises</p>
                </div>
            )}
        </div>
    )
}