import { useContext } from 'react';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';

function Shape({ shapeName }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { setShapeInFocusByUniqueId} = useContext(ShapeInFocusByUniqueIdContext)
    const { setShapeInFocus } = useContext(ShapeInFocusContext);

    function makeRandomUniqueId(length) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    function handleCreateShapeClick(shapeName) {
        const shapeProps = {
            uniqueId: makeRandomUniqueId(8),
            shapeName: shapeName,
            className: 'reactive ' + shapeName,
            initial: {},
            animate: {},
            transition: {},
        };

        setShapeInFocusByUniqueId(shapeProps.uniqueId)
        // for shapes already on the canvas,
        // when a shape is clicked
        // setShapeInFocusByUniqueId
        // then findShapeByUniqueId from shapePropsArray
        // then setShapeInFocus

        setShapeInFocus(shapeProps);
        setShapePropsArray([...shapePropsArray, shapeProps]);
    }

    return (
        <div id="display-shape">
            <div
                className={shapeName}
                onClick={() => handleCreateShapeClick(shapeName)}
            ></div>
        </div>
    );
}

export default Shape;
