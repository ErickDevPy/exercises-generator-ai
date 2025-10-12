import { Loading, QuestionsList } from "~/components";
import { useExercisesPage } from "~/hooks";

export function ExercisesPage() {
    const { loading, questions, onGenerateExercises } = useExercisesPage();

    return (
        <div className="background">
            <div className="container flex-col justify- center items-center gap-15">
                <h1 className="question-title">Exercises</h1>
                <div className="items-col overflow-y-scroll">
                    <QuestionsList exercises={questions} />
                    {!loading && <button onClick={() => onGenerateExercises()} className="main-btn">Generate Exercises</button>}
                    {loading && <Loading/>}
                </div>
            </div>
        </div>
    )
}
