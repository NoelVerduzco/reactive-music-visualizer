import { useContext } from 'react';

import ShapeInFocusContext from '../../context/ShapeInFocusContext';
import DeleteShape from './delete-shape/DeleteShape';
import EffectsPanel from './effects-panel/EffectsPanel';
import Properties from './properties/Properties';
import ReactiveSettings from './reactive-settings/ReactiveSettings';

function ShapeEditor() {
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    return (
        <>
            <div className="minor-component-container bg-light">
                <h3>
                    Shape:{' '}
                    {!shapeInFocus
                        ? 'Waiting'
                        : shapeInFocus.shapeName.charAt(0).toUpperCase() +
                          shapeInFocus.shapeName.slice(1)}
                </h3>
                <DeleteShape />
                <Properties />
            </div>
            <div className="minor-component-container bg-light">
                <EffectsPanel />
            </div>
            <div className="minor-component-container bg-light">
                <ReactiveSettings />
            </div>
        </>
    );
}

export default ShapeEditor;
