import CanvasColor from './canvas-color/CanvasColor';
import DataRate from './data-rate/DataRate';

function GlobalSettings() {
    return (
        <div>
            <h1>Global Settings</h1>
            <DataRate min={10} max={250} />
            <CanvasColor />
        </div>
    );
}

export default GlobalSettings;
