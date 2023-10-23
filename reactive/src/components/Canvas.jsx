import { motion } from 'framer-motion';
import { useContext } from 'react';
import CanvasColorContext from '../context/CanvasColorContext';
import ShapeInFocusContext from '../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';

function Canvas({ currentVolume }) {
    const { shapePropsArray } = useContext(ShapePropsArrayContext);
    const { setShapeInFocus } = useContext(ShapeInFocusContext);
    const { canvasColor } = useContext(CanvasColorContext);

    // STRETCH: Circular motion
    // STRETCH: Bounce

    // TODO: x,y,z origin
    // TODO: Update this method based upon diagram
    function addReactivePropsToShapeProps(shape) {
        const { id } = shape;
        const { className } = shape;
        let { initial } = shape;
        let { animate } = className.includes('reactive') ? {} : shape;
        let { transition } = className.includes('spring')
            ? { type: 'spring', stiffness: 500, damping: 25 }
            : shape;

        if (className.includes('reactive')) {
            if (className.includes('rotate-cw')) {
                const reactiveRotateCW = {
                    rotate: !currentVolume ? 0 : currentVolume * 360,
                };
                animate = { ...animate, ...reactiveRotateCW };
            }
            if (className.includes('rotate-ccw')) {
                const reactiveRotateCCW = {
                    rotate: !currentVolume ? 0 : currentVolume * -360,
                };
                animate = { ...animate, ...reactiveRotateCCW };
            }
            if (className.includes('grow')) {
                const reactiveGrowInitial = {
                    scale: 0,
                };
                initial = { ...initial, ...reactiveGrowInitial };

                const reactiveGrow = {
                    scale: currentVolume,
                };
                animate = { ...animate, ...reactiveGrow };
            }
            if (className.includes('shrink')) {
                // const reactiveShrinkInitial = {
                //     scale: 1,
                // };
                // initial = { ...initial, ...reactiveShrinkInitial };

                const reactiveShrink = {
                    // replace reactive equation with this : f(V) = (N - 1) * V + 1
                    // N is user input from [0,1] and V is currentVolume
                    scale: !currentVolume ? 1 : 1 - currentVolume,
                };
                animate = { ...animate, ...reactiveShrink };
            }
            if (className.includes('translate-up')) {
                const reactiveTranslateUp = {
                    y: -100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateUp };
            }
            if (className.includes('translate-down')) {
                const reactiveTranslateDown = {
                    y: 100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateDown };
            }
            if (className.includes('translate-left')) {
                const reactiveTranslateLeft = {
                    x: -100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateLeft };
            }
            if (className.includes('translate-right')) {
                const reactiveTranslateRight = {
                    x: 100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateRight };
            }
            if (className.includes('fade-in')) {
                const reactiveFadeInInitial = {
                    opacity: 0,
                };
                initial = { ...initial, ...reactiveFadeInInitial };

                const reactiveFadeIn = {
                    opacity: !currentVolume ? 0 : currentVolume,
                };
                animate = { ...animate, ...reactiveFadeIn };
            }
            if (className.includes('fade-out')) {
                // const reactiveFadeOutInitial = {
                //     opacity: 1,
                // };
                // initial = { ...initial, ...reactiveFadeOutInitial };

                const reactiveFadeOut = {
                    // replace reactive equation with this : f(V) = (N - 1) * V + 1
                    // N is user input from [0,1] and V is currentVolume
                    opacity: !currentVolume ? 1 : 1 - currentVolume,
                };
                animate = { ...animate, ...reactiveFadeOut };
            }
        }

        return {
            id,
            className,
            initial,
            animate,
            transition,
        };
    }

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
                            }}
                        ></motion.div>
                    );
                })
            )}
        </div>
    );
}

export default Canvas;
