import { useConfigPage } from "../hooks"

export function ConfigPage() {
    const { apiKeyValue, onApiKeyChange, onBackToMenu } = useConfigPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Configs</h1>
                <div className="flex flex-col gap-8">
                    <input id="apiKeyInput" value={apiKeyValue} onChange={(e) => onApiKeyChange(e.currentTarget.value)} className="key-input" type='password' placeholder="Insert your API Key"/>
                </div>
                <button onClick={() => onBackToMenu()}className="main-btn">Back to Menu</button>
            </div>
        </div>
    )
}