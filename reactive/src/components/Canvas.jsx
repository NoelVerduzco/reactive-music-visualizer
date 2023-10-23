import { motion } from 'framer-motion';
import { useContext } from 'react';
import CanvasColorContext from '../context/CanvasColorContext';
import ShapeInFocusContext from '../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';
import EffectInFocusContext from '../context/EffectInFocusContext';

function Canvas() {
    const { shapePropsArray } = useContext(ShapePropsArrayContext);
    const { setShapeInFocus } = useContext(ShapeInFocusContext);
    const { canvasColor } = useContext(CanvasColorContext);
    const { setEffectInFocus } = useContext(EffectInFocusContext);

    // STRETCH: Circular motion
    // STRETCH: Bounce
    // TODO: x,y,z origin

    

    return (
        <div id="canvas" style={{ backgroundColor: canvasColor }}>
            {shapePropsArray.length === 0 ? (
                <h1>Click on a shape to get started!</h1>
            ) : (
                shapePropsArray.map((shape) => {
                    return (
                        <motion.div
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
                            initial={shape.initial}
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
