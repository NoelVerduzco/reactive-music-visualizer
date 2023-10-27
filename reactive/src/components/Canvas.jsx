import { motion } from 'framer-motion';
import { useContext } from 'react';
import CanvasColorContext from '../context/CanvasColorContext';
import EffectInFocusContext from '../context/EffectInFocusContext';
import ShapeInFocusContext from '../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';

function Canvas() {
    const { shapePropsArray } = useContext(ShapePropsArrayContext);
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { setEffectInFocus } = useContext(EffectInFocusContext);
    const { canvasColor } = useContext(CanvasColorContext);

    return (
        <div id="canvas" style={{ backgroundColor: canvasColor }}>
            {shapePropsArray.length === 0 ? (
                <h1>Click on a shape to get started!</h1>
            ) : (
                shapePropsArray.map((shape) => {
                    return (
                        <motion.div
                            style={{
                                backgroundColor: shape.shapeColor,
                                scale: shape.size,
                                border: shapeInFocus
                                    ? shapeInFocus.uniqueId === shape.uniqueId
                                        ? '6px solid #f80'
                                        : '1px solid black'
                                    : '',
                            }}
                            shapeId={shape.shapeId}
                            uniqueId={shape.uniqueId}
                            shapeName={shape.shapeName}
                            className={
                                'canvas-shape reactive' + shape.className
                            }
                            xPosition={shape.xPosition}
                            yPosition={shape.yPosition}
                            templateId={shape.templateId}
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
