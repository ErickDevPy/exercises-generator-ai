import type { Exercises } from "~/types";
import { QuestionsList } from "./QuestionsList";

export function ExercisesPageBody({questions}: {questions: Exercises}) {
    return (
        <div className="flex flex-col h-screen items-center hide-scrollbar overflow-y-scroll p-30">
            {questions.length > 0 && <QuestionsList exercises={questions} />}
        </div>
    )
}