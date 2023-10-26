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
                copiedShape.shapeColor = e.target.value;
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
                <h6>Shape Color: Waiting</h6>
            ) : (
                <div>
                    <label htmlFor="shape-color">
                        <h6>Shape color: </h6>
                    </label>
                    <br />
                    <input
                        type="color"
                        id="shape-color"
                        name="shape-color"
                        value={shapeInFocus.shapeColor}
                        defaultValue={shapeInFocus.shapeColor}
                        onChange={(e) => handleShapeColorChange(e)}
                    />
                </div>
            )}
        </>
    );
}

export default ShapeColor;
