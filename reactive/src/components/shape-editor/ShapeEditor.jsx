import { useContext } from 'react';

import ShapeInFocusContext from '../../context/ShapeInFocusContext';
import DeleteShape from './delete-shape/DeleteShape';
import Properties from './properties/Properties';
import GeneralEffects from './general-effects/GeneralEffects';

function ShapeEditor() {
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    return (
        <>
            <h1>
                Shape:{' '}
                {!shapeInFocus
                    ? 'None'
                    : shapeInFocus.shapeName.charAt(0).toUpperCase() +
                      shapeInFocus.shapeName.slice(1)}
            </h1>
            <DeleteShape />
            <Properties />
            <GeneralEffects />
        </>
    );
}

export default ShapeEditor;
