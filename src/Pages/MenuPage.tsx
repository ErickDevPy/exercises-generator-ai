import { useMenuPage } from "~/hooks";

export function MenuPage() {
    const { onGoToConfig } = useMenuPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Exercises Generator</h1>
                <div className="flex flex-col gap-8">
                    <button className="main-btn">Generate Exercises</button>
                    <button onClick={() => onGoToConfig()} className="main-btn">Config</button>
                </div>
            </div>
        </div>
    )
}