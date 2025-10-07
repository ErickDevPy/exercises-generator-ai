import { useExercisesPage } from "~/hooks";

export function ExercisesPage() {
    const { onGenerateExercises } = useExercisesPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises</h1>
                <div className="items-col">
                    <button onClick={() => onGenerateExercises()} className="main-btn">Generate Exercises</button>
                </div>
            </div>
        </div>
    )
}
