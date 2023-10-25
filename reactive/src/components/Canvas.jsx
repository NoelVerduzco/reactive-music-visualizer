import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import CanvasColorContext from '../context/CanvasColorContext';
import EffectInFocusContext from '../context/EffectInFocusContext';
import ShapeInFocusContext from '../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';

function Canvas() {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { canvasColor } = useContext(CanvasColorContext);
    const { setEffectInFocus } = useContext(EffectInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );

    function handleUpdatePositionOnDragEnd(newXPoint, newYPoint) {
        const copiedArray = [...shapePropsArray];
        const copiedShape = { ...shapeInFocus };

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                copiedShape.xPosition = newXPoint;
                copiedShape.yPosition = newYPoint;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    const constraintsRef = useRef(null);

    return (
        <div
            id="canvas"
            style={{ backgroundColor: canvasColor }}
            ref={constraintsRef}
        >
            {shapePropsArray.length === 0 ? (
                <h1>Click on a shape to get started!</h1>
            ) : (
                shapePropsArray.map((shape) => {
                    return (
                        <motion.div
                            drag={true}
                            dragMomentum={false}
                            dragElastic={0}
                            dragConstraints={constraintsRef}
                            dragSnapToOrigin={false}
                            onDragStart={() =>
                                setShapeInFocus(shape)
                            }
                            onDragEnd={(event, info) => {
                                handleUpdatePositionOnDragEnd(
                                    info.point.x,
                                    info.point.y
                                );
                            }}
                            shapeId={shape.shapeId}
                            uniqueId={shape.uniqueId}
                            shapeName={shape.shapeName}
                            className={'canvas-shape ' + shape.className}
                            style={{
                                backgroundColor: shape.color,
                                scale: shape.size,
                            }}
                            xPosition={shape.xPosition}
                            yPosition={shape.yPosition}
                            effects={shape.effects}
                            initial={{
                                ...shape.initial,
                                x: shape.xPosition,
                                y: shape.yPosition,
                            }}
                            animate={shape.animate}
                            transition={shape.transition}
                            onClick={() => {
                                setShapeInFocus(shape);
                                setEffectInFocus(null);
                            }}
                        ></motion.div>
                    );
                })
            )}
        </div>
    );
}

export default Canvas;
