import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function ShapeColor() {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);

    function handleShapeColorChange(e) {
        let copiedArray = [...shapePropsArray];
        let copiedShape = { ...shapeInFocus };

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                copiedShape.color = e.target.value;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    return (
        <>
            {!shapeInFocus ? (
                <p>Shape Color: Waiting</p>
            ) : (
                <div>
                    <label htmlFor="shape-color">Shape color: </label>
                    <input
                        type="color"
                        id="shape-color"
                        name="shape-color"
                        value={shapeInFocus.color}
                        defaultValue={shapeInFocus.color}
                        onChange={(e) => handleShapeColorChange(e)}
                    />
                </div>
            )}
        </>
    );
}

export default ShapeColor;
