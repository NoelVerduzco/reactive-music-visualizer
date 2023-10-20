import { useContext } from 'react';
import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function ShapeSize() {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );
    const { shapeInFocus } = useContext(ShapeInFocusContext);

    function handleHeightAndWidthChange(e) {
        let copiedArray = [...shapePropsArray];

        console.log(e.target.value);
        for (const shapeProps of copiedArray) {
            if (shapeProps.uniqueId === shapeInFocusByUniqueId) {
                shapeProps.height = parseInt(e.target.value);
                shapeProps.width = parseInt(e.target.value);
            }
        }

        setShapePropsArray([...copiedArray]);
    }

    function handleHeightChange(e) {
        let copiedArray = [...shapePropsArray];

        console.log(e.target.value);
        for (const shapeProps of copiedArray) {
            if (shapeProps.uniqueId === shapeInFocusByUniqueId) {
                shapeProps.height = parseInt(e.target.value);
            }
        }

        setShapePropsArray([...copiedArray]);
    }

    function handleWidthChange(e) {
        let copiedArray = [...shapePropsArray];

        console.log(e.target.value);
        for (const shapeProps of copiedArray) {
            if (shapeProps.uniqueId === shapeInFocusByUniqueId) {
                shapeProps.width = parseInt(e.target.value);
            }
        }

        setShapePropsArray([...copiedArray]);
    }

    return (
        <div className="shape-size-slider">
            {shapeInFocus === null ? (
                <></>
            ) : shapeInFocus.shapeName === 'square' ||
              shapeInFocus.shapeName === 'circle' ? (
                <>
                    <label htmlFor="shape-size-height-width">
                        Height / Width:{' '}
                    </label>
                    <input
                        type="range"
                        step="5"
                        min="1"
                        max="200"
                        defaultValue="100"
                        id="shape-size-height-width"
                        onChange={(e) => handleHeightAndWidthChange(e)}
                    />
                </>
            ) : (
                <>
                    <div id="height-slider">
                        <label htmlFor="shape-size-height">Height : </label>
                        <input
                            type="range"
                            step="5"
                            min="1"
                            max="200"
                            defaultValue="100"
                            id="shape-size-height"
                            onChange={(e) => handleHeightChange(e)}
                        />
                    </div>
                    <div id="width-slider">
                        <label htmlFor="shape-size-width">Width: </label>
                        <input
                            type="range"
                            step="5"
                            min="1"
                            max="200"
                            defaultValue="100"
                            id="shape-size-width"
                            onChange={(e) => handleWidthChange(e)}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default ShapeSize;
