export function ConfigPage() {

    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Configs</h1>
                <div className="flex flex-col gap-8">
                    <input className="bg-white p-5 rounded-3xl" type='password' placeholder="API-KEY"/>
                </div>
                <button className="main-btn">Back to Menu</button>
            </div>
        </div>
    )
}