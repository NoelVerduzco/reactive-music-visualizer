import { motion } from 'framer-motion';
import { useContext } from 'react';
import CanvasColorContext from '../context/CanvasColorContext';
import ShapeInFocusByUniqueIdContext from '../context/ShapeInFocusByUniqueIdContext';
import ShapeInFocusContext from '../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';

function Canvas({ currentVolume }) {
    const { shapePropsArray } = useContext(ShapePropsArrayContext);
    const { canvasColor } = useContext(CanvasColorContext);
    const { setShapeInFocusByUniqueId } = useContext(
        ShapeInFocusByUniqueIdContext
    );
    const { setShapeInFocus } = useContext(ShapeInFocusContext);

    // STRETCH: Circular motion
    // STRETCH: Bounce

    // TODO: x,y,z origin
    // TODO: Update this method based upon diagram
    function addReactivePropsToShapeProps(shapeProps) {
        const { id } = shapeProps;
        const { className } = shapeProps;
        let { initial } = shapeProps;
        let { animate } = className.includes('reactive') ? {} : shapeProps;
        let { transition } = className.includes('spring')
            ? { type: 'spring', stiffness: 500, damping: 25 }
            : shapeProps;

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
                shapePropsArray.map((shapeProps) => {
                    return (
                        <motion.div
                            uniqueId={shapeProps.uniqueId}
                            shapeName={shapeProps.shapeName}
                            className={shapeProps.className}
                            style={{
                                backgroundColor: shapeProps.color,
                                height: shapeProps.height,
                                width: shapeProps.width,
                            }}
                            initial={shapeProps.initial}
                            animate={shapeProps.animate}
                            transition={shapeProps.transition}
                            onClick={() => {
                                setShapeInFocusByUniqueId(shapeProps.uniqueId);
                                setShapeInFocus(shapeProps);
                            }}
                        ></motion.div>
                    );
                })
            )}
        </div>
    );
}

export default Canvas;
