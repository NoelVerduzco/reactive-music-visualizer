import CanvasColor from './canvas-color/CanvasColor';
import DataRate from './data-rate/DataRate';

function GlobalSettings() {
    return (
        <div className="d-flex flex-column">
            <h3  className='mb-4'>Global Settings</h3>

            <div className="btn btn-outline-secondary">
                <CanvasColor />
            </div>
            <div className="btn btn-outline-secondary">
                <DataRate min={10} max={250} />
            </div>
        </div>
    );
}

export default GlobalSettings;
