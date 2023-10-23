import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function ShapeSize() {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);

    function handleSizeChange(e) {
        let copiedArray = [...shapePropsArray];
        let copiedShape = { ...shapeInFocus };

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                copiedShape.size = e.target.value;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    return (
        <div className="shape-size-container">
            {!shapeInFocus ? (
                <p>Shape Size: Waiting</p>
            ) : (
                <>
                    <label htmlFor="shape-size-slider">Shape Size:</label>
                    <input
                        type="range"
                        step="0.1"
                        min="0.1"
                        max="3.0"
                        defaultValue={shapeInFocus.size}
                        id="shape-size-slider"
                        onChange={(e) => handleSizeChange(e)}
                    />
                </>
            )}
        </div>
    );
}

export default ShapeSize;
