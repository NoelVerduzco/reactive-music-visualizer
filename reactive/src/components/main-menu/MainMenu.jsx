import GlobalSettings from './global-settings/GlobalSettings';
import ShapeSpawner from './shape-spawner/ShapeSpawner';

function MainMenu() {
    return (
        <>
            <div className="minor-component-container bg-light">
                <GlobalSettings />
            </div>
            <div className="minor-component-container bg-light">
                <ShapeSpawner />
            </div>
        </>
    );
}

export default MainMenu;
