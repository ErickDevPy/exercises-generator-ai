import { ExercisesPageBody, ExercisesPageBottom, ExercisesPageHeader } from "~/components";
import { useExercisesPage } from "~/hooks";

export function ExercisesPage() {
    const { loading, questions, onGenerateExercises, onGoPreviousPage } = useExercisesPage();

    return (
        <div className="background">
            <ExercisesPageHeader onGoPreviousPage={onGoPreviousPage}/>
            <ExercisesPageBody questions={questions} />
            <ExercisesPageBottom loading={loading} onGenerateExercises={onGenerateExercises}/>
        </div>
    )
}
