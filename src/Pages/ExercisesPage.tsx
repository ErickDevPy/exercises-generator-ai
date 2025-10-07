import { Loading } from "~/components";
import { useExercisesPage } from "~/hooks";

export function ExercisesPage() {
    const { loading, onGenerateExercises } = useExercisesPage();

    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises</h1>
                <div className="items-col">
                    <button onClick={() => onGenerateExercises()} className="main-btn">Generate Exercises</button>
                    {loading && <Loading/>}
                </div>
            </div>
        </div>
    )
}
