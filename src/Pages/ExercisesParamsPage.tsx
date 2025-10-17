import { useExercisesParamsPage } from "~/hooks";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export function ExercisesParamsPage() {
    const { register, onSubmit, handleSubmit, formState: { errors, isSubmitting }, onBackToMenu } = useExercisesParamsPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises Parameters</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="items-col">
                    <input 
                        id="subjects"
                        {...register("subjects")}
                        className={'main-input'}
                        type="text" 
                        placeholder="Type the subject(s) of the exercises here"
                    />
                    {errors.subjects && <p className="error-message">{errors.subjects.message}</p>}
                    <input 
                        id="reference"
                        {...register("reference")}
                        className={'main-input'}
                        type="text" 
                        placeholder="Enter the reference source/institution for the exercises. (Optional)"
                    />
                    {errors.reference && <p className="error-message">{errors.reference.message}</p>}
                    <select 
                        id="difficulty"
                        {...register("difficulty")}
                        className={'main-input'}
                    >
                        {DIFFICULTIES.map(diff => (
                            <option key={diff} value={diff.toLowerCase()}>{diff}</option>
                        ))}
                    </select>
                    {errors.difficulty && <p className="error-message">{errors.difficulty.message}</p>}
                    <input 
                        id="exercisesNumber" 
                        {...register("exercisesNumber")} 
                        className={`main-input ${errors.exercisesNumber ? 'input-error' : ''}`}
                        type="number" 
                        placeholder="Number of exercises per subject"
                    />
                    {errors.exercisesNumber && <p className="error-message">{errors.exercisesNumber.message}</p>}
                    <div className="items-col">
                        <button 
                            type="submit" 
                            className="main-btn"
                        >
                            {isSubmitting ? "Loading..." : "Continue"}
                        </button>
                        <button 
                            onClick={onBackToMenu} 
                            className="main-btn"
                            type="button" 
                        >
                            Back to Menu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}