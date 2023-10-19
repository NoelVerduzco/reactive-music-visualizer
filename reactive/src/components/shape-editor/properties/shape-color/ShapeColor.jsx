import { useContext } from 'react';
import ShapeColorContext from '../../../../context/ShapeColorContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';

function ShapeColor() {
    const { setShapeColor } = useContext(ShapeColorContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );

    function handleShapeColorChange(e) {
        console.log(e.target.value);
        
        let copiedArray = [...shapePropsArray];
        for (const shapeProps of copiedArray) {
            if (shapeProps.uniqueId === shapeInFocusByUniqueId) {
                shapeProps.style = e.target.value;
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
