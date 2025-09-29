export function MenuPage() {

    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises Generator</h1>
                <div className="flex flex-col gap-8">
                    <button className="menu-btn">Generate Exercises</button>
                    <button className="menu-btn">Config</button>
                </div>
            </div>
        </div>
    )
}