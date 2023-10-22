import { useContext } from 'react';
import ShapeColorContext from '../../../../context/ShapeColorContext';
import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function ShapeColor() {
    // TODO: ShapeColorContext may not be necessary
    const { setShapeColor } = useContext(ShapeColorContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );

    function handleShapeColorChange(e) {
        let copiedArray = [...shapePropsArray];
        for (const shapeProps of copiedArray) {
            if (shapeProps.uniqueId === shapeInFocusByUniqueId) {
                shapeProps.color = e.target.value;
            }
        }

        setShapeColor(e.target.value);
        setShapePropsArray(copiedArray);
    }

    return (
        <div>
            <label htmlFor="shape-color">Shape color: </label>
            <input
                type="color"
                id="shape-color"
                name="shape-color"
                defaultValue="#000000"
                onChange={(e) => handleShapeColorChange(e)}
            />
        </div>
    );
}

export default ShapeColor;
