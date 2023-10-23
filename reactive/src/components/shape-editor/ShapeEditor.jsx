import { useContext } from 'react';

import ShapeInFocusContext from '../../context/ShapeInFocusContext';
import DeleteShape from './delete-shape/DeleteShape';
import EffectsPanel from './effects-panel/EffectsPanel';
import Properties from './properties/Properties';

function ShapeEditor() {
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    return (
        <>
            <h1>
                Shape:{' '}
                {!shapeInFocus
                    ? 'Waiting'
                    : shapeInFocus.shapeName.charAt(0).toUpperCase() +
                      shapeInFocus.shapeName.slice(1)}
            </h1>
            <DeleteShape />
            <Properties />
            <EffectsPanel />
        </>
    );
}

export default ShapeEditor;
