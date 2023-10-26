import { useContext } from 'react';
import ShapeInFocusContext from '../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../context/ShapePropsArrayContext';

function DeleteShape() {
    // TODO: Fix shape shifting after deleting a shape
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);

    function handleDeleteShapeClick() {
        let copiedArray = [...shapePropsArray];
        let copiedShape = { ...shapeInFocus };

        copiedArray = copiedArray.filter(
            (shape) => shape.uniqueId != copiedShape.uniqueId
        );

        setShapePropsArray(copiedArray);
        setShapeInFocus(null);
    }

    return (
        <>
            {!shapeInFocus ? (
                <h6>Delete Shape Button: Waiting</h6>
            ) : (
                <button
                className='btn-danger mb-3 me-3'
                    id="delete-shape"
                    type="button"
                    onClick={handleDeleteShapeClick}
                >
                    Delete Shape
                </button>
            )}
        </>
    );
}

export default DeleteShape;
