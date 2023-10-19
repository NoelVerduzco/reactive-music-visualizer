import DataRate from './data-rate/DataRate';
import CanvasColor from './canvas-color/CanvasColor';

function GlobalSettings() {
    return (
        <div>
            <h1>Global Settings</h1>
            <DataRate />
            <CanvasColor />
        </div>
    );
}

export default GlobalSettings;
