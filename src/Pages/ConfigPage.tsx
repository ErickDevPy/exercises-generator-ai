import { useConfigPage } from "~/hooks";

export function ConfigPage() {
    const { apiKeyValue, onApiKeyChange, onBackToMenu } = useConfigPage();
    return (
        <div className="background">
            <div className="container flex-col justify-center items-center gap-15">
                <h1>Configs</h1>
                <div className="items-col">
                    <input id="apiKeyInput" value={apiKeyValue} onChange={(e) => onApiKeyChange(e.currentTarget.value)} className="main-input" type='password' placeholder="Insert your API Key"/>
                </div>
                <button onClick={() => onBackToMenu()} className="main-btn">Back to Menu</button>
            </div>
        </div>
    )
}