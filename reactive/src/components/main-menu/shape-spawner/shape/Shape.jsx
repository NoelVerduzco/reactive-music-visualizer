import { useContext } from 'react';
import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function Shape({ shapeName }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { setShapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );
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
            uniqueId: makeRandomUniqueId(6),
            shapeName: shapeName,
            className: 'reactive ' + shapeName,
            color: '#ffffff',
            height: 100,
            width: shapeName === 'square' || shapeName === 'circle' ? 100 : 200,
            initial: {},
            animate: {},
            transition: {},
        };

        setShapeInFocusByUniqueId(shapeProps.uniqueId);
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
