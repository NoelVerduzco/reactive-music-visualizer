import { useContext } from 'react';
import ShapeInFocusContext from '../../context/ShapeInFocusContext';
import DeleteShape from './delete-shape/DeleteShape';
import EffectsPanel from './effects-panel/EffectsPanel';
import Properties from './properties/Properties';
import ReactiveSettings from './reactive-settings/ReactiveSettings';
import UnfocusShape from './unfocus-shape/UnfocusShape';

function ShapeEditor() {
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    return (
        <>
            <div className="minor-component-container bg-light">
                <h3 className="mb-4">
                    Shape:{' '}
                    {!shapeInFocus
                        ? 'Waiting'
                        : shapeInFocus.shapeName.charAt(0).toUpperCase() +
                          shapeInFocus.shapeName.slice(1)}
                </h3>
                <div className="d-flex flex-column">
                    <UnfocusShape />
                    <DeleteShape />
                </div>
                <div className="d-flex flex-column">
                    <Properties />
                </div>
            </div>
            <div className="minor-component-container bg-light">
                <EffectsPanel />
            </div>
            <div
                id="reactive-settings-container"
                className="minor-component-container bg-light d-flex flex-column"
            >
                <ReactiveSettings />
            </div>
        </>
    );
}

export default ShapeEditor;
