import { useContext, useEffect, useState } from 'react';
import CurrentVolumeContext from '../../../../context/CurrentVolumeContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function Effect({ name, min, max, step }) {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);
    const { currentVolume } = useContext(CurrentVolumeContext);
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        if (shapePropsArray.length > 0) {
            let copiedArray = [...shapePropsArray];
            for (let i = 0; i < copiedArray.length; i++) {
                copiedArray[i] = refreshReactiveProperties(copiedArray[i]);
            }
            setShapePropsArray(copiedArray);
        }
    }, [currentVolume]);

    useEffect(() => {
        if (shapeInFocus) {
            setIsEnabled(
                shapeInFocus.effects.filter(
                    (effect) => effect.effectName === name
                )[0].isEnabled
            );
        }
    }, [shapeInFocus]);

    function handleEffectClick() {
        setEffectInFocus(
            shapeInFocus.effects.filter(
                (effect) => effect.effectName === name
            )[0]
        );
    }

    function handleEffectToggle() {
        let copiedArray = [...shapePropsArray];
        let copiedShape = { ...shapeInFocus };
        let tempIsEnabled = copiedShape.effects.filter(
            (effect) => effect.effectName === name
        )[0].isEnabled;

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                tempIsEnabled = tempIsEnabled ? false : true;
                copiedShape.effects.filter(
                    (effect) => effect.effectName === name
                )[0].isEnabled = tempIsEnabled;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    function handleValueChange(e) {
        let copiedArray = [...shapePropsArray];
        let copiedShape = { ...shapeInFocus };

        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                copiedShape.effects.filter(
                    (effect) => effect.effectName === name
                )[0].value = e.target.value;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                console.log(
                    shapeInFocus.effects.filter(
                        (effect) => effect.effectName === name
                    )[0].value
                );
                break;
            }
        }
    }

    function refreshReactiveProperties(shape) {
        let initial = {};
        let animate = {};

        if (shape.className.includes('reactive')) {
            for (let i = 0; i < shape.effects.length; i++) {
                if (shape.effects[i].isEnabled) {
                    if (shape.effects[i].effectName === 'fade') {
                        const reactiveFadeInitial = {
                            opacity: 0,
                        };
                        initial = { ...initial, ...reactiveFadeInitial };

                        const reactiveFadeAnimate = {
                            opacity: !currentVolume
                                ? 0
                                : currentVolume[shape.effects[i].frequencyBin]
                                      .value[
                                      shape.effects[i].isRightChannel ? 1 : 0
                                  ] * shape.effects[i].value,
                        };
                        animate = { ...animate, ...reactiveFadeAnimate };
                    }
                    if (shape.effects[i].effectName === 'vertical-shift') {
                        const reactiveVerticalShiftAnimate = {
                            y:
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] * shape.effects[i].value,
                        };
                        animate = {
                            ...animate,
                            ...reactiveVerticalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'horizontal-shift') {
                        const reactiveHorizontalShiftAnimate = {
                            x:
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] * shape.effects[i].value,
                        };
                        animate = {
                            ...animate,
                            ...reactiveHorizontalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'scale') {
                        const reactiveScaleInitial = {
                            scale: 0,
                        };
                        initial = { ...initial, ...reactiveScaleInitial };

                        const reactiveScaleAnimate = {
                            scale:
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] * shape.effects[i].value,
                        };
                        animate = { ...animate, ...reactiveScaleAnimate };
                    }
                    if (shape.effects[i].effectName === 'rotate') {
                        const reactiveRotateAnimate = {
                            rotate: !currentVolume
                                ? 0
                                : currentVolume[shape.effects[i].frequencyBin]
                                      .value[
                                      shape.effects[i].isRightChannel ? 1 : 0
                                  ] * shape.effects[i].value,
                        };
                        animate = { ...animate, ...reactiveRotateAnimate };
                    }
                } else {
                    if (shape.effects[i].effectName === 'fade') {
                        const reactiveFadeInitial = {
                            opacity: 1,
                        };
                        initial = { ...initial, ...reactiveFadeInitial };

                        const reactiveFadeAnimate = {
                            opacity: 1,
                        };
                        animate = { ...animate, ...reactiveFadeAnimate };
                    }
                    if (shape.effects[i].effectName === 'vertical-shift') {
                        const reactiveVerticalShiftAnimate = {
                            y: 0,
                        };
                        animate = {
                            ...animate,
                            ...reactiveVerticalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'horizontal-shift') {
                        const reactiveHorizontalShiftAnimate = {
                            x: 0,
                        };
                        animate = {
                            ...animate,
                            ...reactiveHorizontalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'scale') {
                        const reactiveScaleInitial = {
                            scale: 1,
                        };
                        initial = { ...initial, ...reactiveScaleInitial };

                        const reactiveScaleAnimate = {
                            scale: 1,
                        };
                        animate = { ...animate, ...reactiveScaleAnimate };
                    }
                    if (shape.effects[i].effectName === 'rotate') {
                        const reactiveRotateAnimate = {
                            rotate: 0,
                        };
                        animate = { ...animate, ...reactiveRotateAnimate };
                    }
                }
            }
        }

        let copiedShape = { ...shape };
        copiedShape.initial = initial;
        copiedShape.animate = animate;
        return copiedShape;
    }

    return (
        <>
            {!shapeInFocus ? (
                <p>Effect: Waiting</p>
            ) : (
                <div
                    className="effect-container"
                    style={{
                        border: '1px solid red',
                        backgroundColor: !effectInFocus
                            ? 'red'
                            : effectInFocus.effectName === name
                            ? 'green'
                            : 'red',
                    }}
                    onClick={handleEffectClick}
                >
                    <p>{name} Effect Toggler</p>
                    <div className="effect-toggler-container">
                        <button
                            className="general-effect-toggler-button"
                            onClick={handleEffectToggle}
                            style={
                                isEnabled
                                    ? { backgroundColor: 'green' }
                                    : { backgroundColor: 'red' }
                            }
                        ></button>
                        <div>
                            <label htmlFor={name + '-value-slider'}>
                                Effect Value [{min}, {max}]:
                            </label>
                            <input
                                type="range"
                                step={step}
                                min={min}
                                max={max}
                                value={
                                    shapeInFocus.effects.filter(
                                        (effect) => effect.effectName === name
                                    )[0].value
                                }
                                defaultValue={
                                    shapeInFocus.effects.filter(
                                        (effect) => effect.effectName === name
                                    )[0].value
                                }
                                id={name + '-value-slider'}
                                onChange={(e) => handleValueChange(e)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Effect;
