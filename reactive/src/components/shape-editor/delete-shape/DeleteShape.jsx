import { useContext } from 'react';
import ShapeInFocusContext from '../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../context/ShapePropsArrayContext';

function DeleteShape() {
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
                <p>Delete Shape Button: Waiting</p>
            ) : (
                <button
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
