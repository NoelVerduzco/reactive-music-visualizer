import { useContext, useEffect } from 'react';

import ShapeInFocusContext from '../../context/ShapeInFocusContext';
import DeleteShape from './delete-shape/DeleteShape';
import Properties from './properties/Properties';

function ShapeEditor() {
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    useEffect(() => {
        console.log(
            'Shape in focus: ' +
                (!shapeInFocus
                    ? 'None'
                    : shapeInFocus.shapeName.charAt(0).toUpperCase() +
                      shapeInFocus.shapeName.slice(1))
        );
    }, [shapeInFocus]);

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
        </>
    );
}

export default ShapeEditor;
