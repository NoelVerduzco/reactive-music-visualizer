import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function ShapePosition({ position, min, max, step }) {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );

    function handleValueChange(e) {
        let copiedShape = { ...shapeInFocus };
        let copiedArray = [...shapePropsArray];

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                position === 'xPosition'
                    ? (copiedShape.xPosition = parseInt(e.target.value))
                    : (copiedShape.yPosition = parseInt(e.target.value));
                setShapeInFocus(copiedShape);
                copiedArray[i] = copiedShape;
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    return (
        <>
            {!shapeInFocus ? (
                <h6>Shape {position}: Waiting</h6>
            ) : (
                <div>
                    <label htmlFor={position + '-value-slider'}>
                        <h6>
                            {position} Value [{min}, {max}]:
                        </h6>
                    </label>
                    <input
                        type="range"
                        step={step}
                        min={min}
                        max={max}
                        value={
                            position === 'xPosition'
                                ? shapeInFocus.xPosition
                                : shapeInFocus.yPosition
                        }
                        defaultValue={
                            position === 'xPosition'
                                ? shapeInFocus.xPosition
                                : shapeInFocus.yPosition
                        }
                        id={position + '-value-slider'}
                        onChange={(e) => handleValueChange(e)}
                    />
                </div>
            )}
        </>
    );
}

export default ShapePosition;
