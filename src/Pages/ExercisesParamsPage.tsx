import { useExercisesParamsPage } from "~/hooks";

export function ExercisesParamsPage() {
    const { subjects, reference, exercisesNumber, difficulty, difficulties, onSubjectsChange, onReferenceChange, onExercisesNumberChange, onDifficultyChange, onBackToMenu } = useExercisesParamsPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises Parameters</h1>
                <div className="items-col">
                    <input id="subjects" value={subjects} onChange={(e) => onSubjectsChange(e.target.value)} className="main-input" type="text" placeholder="Type the subject(s) of the exercises here"/>
                    <input id="reference" value={reference} onChange={(e) => onReferenceChange(e.target.value)} className="main-input" type="text" placeholder="Enter the reference source/institution for the exercises. (Optional)"/>
                    <select id="difficulty" value={difficulty} onChange={(e) => onDifficultyChange(e.target.value)} className="main-input">
                        {difficulties.map(diff => (
                            <option key={diff} value={diff.toLowerCase()}>{diff}</option>
                        ))}
                    </select>
                    <input id="exercisesNumber" value={exercisesNumber} onChange={(e) => onExercisesNumberChange(e.target.valueAsNumber)} className="main-input" type="number" placeholder="Number of exercises"/>
                </div>
                <div className="items-col">
                    <button className="main-btn">Generate Exercises</button>
                    <button onClick={() => onBackToMenu()} className="main-btn">Back to Menu</button>
                </div>
            </div>
        </div>
    )
}