import { useContext } from 'react';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function Shape({ shapeName }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );

    function createShape(shapeName) {
        const shapeProps = {
            className: 'reactive ' + shapeName,
            initial: {},
            animate: {},
            transition: {},
        };

        setShapePropsArray([...shapePropsArray, shapeProps]);
    }

    return (
        <div id='display-shape'>
            <div
                className={shapeName}
                onClick={() => createShape(shapeName)}
            ></div>
        </div>
    );
}

export default Shape;
