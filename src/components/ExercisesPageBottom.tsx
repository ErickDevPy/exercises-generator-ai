import { Loading } from "./Loading";

interface ExercisesPageBottomParams {
    loading: boolean;
    onGenerateExercises: () => Promise<void>;
}

export function ExercisesPageBottom({ loading, onGenerateExercises}: ExercisesPageBottomParams) {
    return (
        <div className="exercises-bottom">
            {loading && <Loading/>}
            {!loading && <button onClick={() => onGenerateExercises()} className="main-btn">Generate Exercises</button>}
        </div>
    )
}