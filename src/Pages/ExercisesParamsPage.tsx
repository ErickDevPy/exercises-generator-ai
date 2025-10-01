export function ExercisesParamsPage() {

    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises Parameters</h1>
                <div className="items-col">
                    <input id="subjects" className="main-input" type="text" placeholder="Type the subject(s) of the exercises here"/>
                    <input id="reference" className="main-input" type="text" placeholder="Enter the reference source/institution for the exercises. (Optional)"/>
                    <select id="difficulty" className="main-input">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <input id="exercisesNumber" className="main-input" type="number" placeholder="Number of exercises"/>
                </div>
                <div className="items-col">
                    <button className="main-btn">Generate Exercises</button>
                    <button className="main-btn">Back to Menu</button>
                </div>
            </div>
        </div>
    )
}