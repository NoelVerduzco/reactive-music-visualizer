import GlobalSettings from './global-settings/GlobalSettings';
import ShapeSpawner from './shape-spawner/ShapeSpawner';
import TemplateActions from './template-actions/TemplateActions';

function MainMenu() {
    return (
        <>
            <div className="minor-component-container bg-light">
                <TemplateActions />
            </div>
            <div className="minor-component-container bg-light">
                <GlobalSettings />
            </div>
            <div
                id="shape-spawner-container"
                className="minor-component-container bg-light"
            >
                <ShapeSpawner />
            </div>
        </>
    );
}

export default MainMenu;
