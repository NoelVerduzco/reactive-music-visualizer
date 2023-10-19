import ShapePropsArrayContext from '../../../context/ShapePropsArrayContext';
import ShapeInFocusByUniqueIdContext from '../../../context/ShapeInFocusByUniqueIdContext';
import ShapeInFocusContext from '../../../context/ShapeInFocusContext'
import { useContext } from 'react';

function DeleteShape() {
    const { shapeInFocusByUniqueId, setShapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { setShapeInFocus } = useContext(ShapeInFocusContext)

    function handleDeleteShapeClick() {
        let copiedArray = [...shapePropsArray];
        console.log(copiedArray);

        for (let i = 0; i < shapePropsArray.length; i++) {
            copiedArray = copiedArray.filter(
                (shapeProps) => shapeProps.uniqueId != shapeInFocusByUniqueId
            );
        }
        console.log(copiedArray);
        setShapePropsArray(copiedArray);
        setShapeInFocus(null);
        setShapeInFocusByUniqueId(null);
    }

    return (
        <button
            id="delete-shape"
            type="button"
            onClick={handleDeleteShapeClick}
        >
            Delete Shape
        </button>
    );
}

export default DeleteShape;
