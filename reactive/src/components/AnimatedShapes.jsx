import { animate, motion } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedShapes({ currentVolume }) {
    // fadein fadeout opacity
    // circular motion
    // bounce?
    // x,y,z origin?

    // TODO:
    // className maximums: [1, CSS design], [1, reactive], [1, rotation], [1, x-translation], [1, y-translation], [1, scale]
    // toggle classnames with radio buttons to prevent user from selecting more than one
    // add sliders to allow user to edit shape's position, maximum rotation, and scale value
    const dbShapePropsOne = {
        id: 1,
        className: 'square reactive rotate-cw',
        initial: { rotate: 0, x: 100, y: 0 },
        animate: { rotate: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };
    const dbShapePropsTwo = {
        id: 2,
        className: 'circle reactive grow',
        initial: { scale: 0, x: 200, y: 0 },
        animate: { scale: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };
    const dbShapePropsFour = {
        id: 4,
        className: 'oval reactive translate-Y-down',
        initial: { x: 300, y: 0 },
        animate: { y: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };
    const dbShapePropsFive = {
        id: 5,
        className: 'oval reactive translate-X-right',
        initial: { x: 300, y: 0 },
        animate: { x: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };
    const dbShapePropsSix = {
        id: 6,
        className: 'oval reactive translate-X-right translate-Y-down',
        initial: { x: 0, y: 0 },
        animate: { x: 0, y: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };
    const dbShapePropsSeven = {
        id: 7,
        className:
            'square reactive translate-X-left translate-Y-up rotate-cw grow',
        initial: { x: 0, y: 0 },
        animate: { x: 0, y: 0, rotate: 0 },
        transition: { type: 'spring', stiffness: 500, damping: 25 },
    };

    const dbShapesWithoutReactiveProps = [
        dbShapePropsOne,
        dbShapePropsTwo,
        dbShapePropsFour,
        dbShapePropsFive,
        dbShapePropsSix,
        dbShapePropsSeven,
    ];

    function addReactivePropsToShapeProps(shapeProps) {
        const { id } = shapeProps;
        const { className } = shapeProps;
        const { initial } = shapeProps;
        let { animate } = className.includes('reactive') ? {} : shapeProps;
        const { transition } = shapeProps;

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
                const reactiveGrow = {
                    scale: currentVolume,
                };
                animate = { ...animate, ...reactiveGrow };
            }
            if (className.includes('shrink')) {
                const reactiveShrink = {
                    scale: !currentVolume ? 1 : 1 - currentVolume,
                };
                animate = { ...animate, ...reactiveShrink };
            }
            if (className.includes('translate-X-right')) {
                const reactiveTranslateXRight = {
                    x: 100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateXRight };
            }
            if (className.includes('translate-Y-down')) {
                const reactiveTranslateYDown = {
                    y: 100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateYDown };
            }
            if (className.includes('translate-X-left')) {
                const reactiveTranslateXLeft = {
                    x: -100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateXLeft };
            }
            if (className.includes('translate-Y-up')) {
                const reactiveTranslateYUp = {
                    y: -100 * currentVolume,
                };
                animate = { ...animate, ...reactiveTranslateYUp };
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
    //     console.log(dbShapesWithReactiveProps[0].animate.rotate)
    //     console.log(dbShapesWithReactiveProps[1].animate.scale)
    // },[currentVolume])

    return (
        <div className="canvas-box">
            {dbShapesWithReactiveProps.map((shape) => {
                return (
                    <motion.div
                        id={shape.id}
                        className={shape.className}
                        initial={shape.initial}
                        animate={shape.animate}
                        transition={shape.transition}
                    ></motion.div>
                );
            })}
        </div>
    );
}

export default AnimatedShapes;
