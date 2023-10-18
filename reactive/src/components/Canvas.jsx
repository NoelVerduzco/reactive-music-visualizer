import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import ShapePropsArrayContext from '../context/ShapePropsArrayContext';

function Canvas({ currentVolume, currentSongTime }) {
    const { shapePropsArray, setShapePropsArray } = useContext(ShapePropsArrayContext);

    // STRETCH: Circular motion
    // STRETCH: Bounce

    // TODO: x,y,z origin

    // TODO:
    // className maximums: [1, CSS design], [1, reactive], [1, rotation], [1, x-translation], [1, y-translation], [1, scale], [1, fade]
    // toggle classnames with radio buttons to prevent user from selecting more than one
    // add sliders to allow user to edit shape's position, maximum rotation, and scale value

    // const [shapes, setShapes] = useState([]);

    const dbShapePropsOne = {
        id: 1,
        className: 'circle reactive spring grow',
        initial: {},
        animate: {},
        transition: {},
    };

    // This will be replaced with API GET request data from backend/DB
    const dbShapesWithoutReactiveProps = [dbShapePropsOne];

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

    const dbShapesWithReactiveProps = [];

    for (const shapeProps of dbShapesWithoutReactiveProps) {
        dbShapesWithReactiveProps.push(
            addReactivePropsToShapeProps(shapeProps)
        );
    }

    // useEffect(() => {
    //     console.log(shapes);
    //     setShapes(dbShapesWithReactiveProps);
    // },[]);

    // useEffect(() => {
    //     console.log(dbShapesWithReactiveProps[0].animate.rotate)
    //     console.log(dbShapesWithReactiveProps[1].animate.scale)
    // },[currentVolume])

    return (
        <div className="canvas-box">
            {shapePropsArray.length === 0 ? (
                <p>Nothing to see here!</p>
            ) : (
                shapePropsArray.map((shape) => {
                    return (
                        <motion.div
                            id={shape.id}
                            className={shape.className}
                            initial={shape.initial}
                            animate={shape.animate}
                            transition={shape.transition}
                        ></motion.div>
                    );
                })
            )}

            {/* {shapePropsArray.map((shape) => {
                return (
                    <motion.div
                        id={shape.id}
                        className={shape.className}
                        initial={shape.initial}
                        animate={shape.animate}
                        transition={shape.transition}
                    ></motion.div>
                );
            })} */}
        </div>
    );
}

export default Canvas;
