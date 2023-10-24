import CanvasColor from './canvas-color/CanvasColor';
import DataRate from './data-rate/DataRate';

function GlobalSettings() {
    return (
        <div>
            <h3>Global Settings</h3>
            <DataRate min={10} max={250} />
            <CanvasColor />
        </div>
    );
}

export default GlobalSettings;
