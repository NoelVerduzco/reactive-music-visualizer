import { useContext, useEffect, useState } from 'react';
import CurrentVolumeContext from '../../../../context/CurrentVolumeContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import IsMusicPlayingContext from '../../../../context/IsMusicPlayingContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function Effect({ name, min, max, step, description }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);
    const { currentVolume } = useContext(CurrentVolumeContext);
    const { isMusicPlaying } = useContext(IsMusicPlayingContext);
    const [isEnabled, setIsEnabled] = useState(false);

    // Update shape properties while music is playing
    useEffect(() => {
        if (isMusicPlaying) {
            if (shapePropsArray.length > 0) {
                let copiedArray = [...shapePropsArray];
                for (let i = 0; i < copiedArray.length; i++) {
                    copiedArray[i] = refreshReactiveProperties(copiedArray[i]);
                }
                setShapePropsArray(copiedArray);
            }
        }
    }, [currentVolume]);

    // Update shape position while music is paused
    useEffect(() => {
        if (!isMusicPlaying) {
            if (shapePropsArray.length > 0) {
                let copiedArray = [...shapePropsArray];
                for (let i = 0; i < copiedArray.length; i++) {
                    copiedArray[i] = refreshReactiveProperties(copiedArray[i]);
                }
                setShapePropsArray(copiedArray);
            }
        }
    }, [shapeInFocus]);

    // Update effect toggle buttons to be red or green on click
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
                )[0].effectValue = e.target.value;
                copiedArray[i] = copiedShape;
                setShapeInFocus(copiedShape);
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    function refreshReactiveProperties(shape) {
        let initial = {};
        let animate = {};

        if (shape.className.includes('reactive')) {
            for (let i = 0; i < shape.effects.length; i++) {
                if (shape.effects[i].isEnabled && isMusicPlaying) {
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
                                  ] * shape.effects[i].effectValue,
                        };
                        animate = { ...animate, ...reactiveFadeAnimate };
                    }
                    if (shape.effects[i].effectName === 'vertical-shift') {
                        const reactiveVerticalShiftAnimate = {
                            y:
                                shape.yPosition +
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] *
                                    shape.effects[i].effectValue,
                        };
                        animate = {
                            ...animate,
                            ...reactiveVerticalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'horizontal-shift') {
                        const reactiveHorizontalShiftAnimate = {
                            x:
                                shape.xPosition +
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] *
                                    shape.effects[i].effectValue,
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
                            scale:
                                currentVolume[shape.effects[i].frequencyBin]
                                    .value[
                                    shape.effects[i].isRightChannel ? 1 : 0
                                ] * shape.effects[i].effectValue,
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
                                  ] * shape.effects[i].effectValue,
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
                            y: shape.yPosition,
                        };
                        animate = {
                            ...animate,
                            ...reactiveVerticalShiftAnimate,
                        };
                    }
                    if (shape.effects[i].effectName === 'horizontal-shift') {
                        const reactiveHorizontalShiftAnimate = {
                            x: shape.xPosition,
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
                <h6>Effect: Waiting</h6>
            ) : (
                <div
                    className="effect-container d-flex flex-column align-items-center"
                    style={{
                        border: 'solid 2px white',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        backgroundColor: !effectInFocus
                            ? 'black'
                            : effectInFocus.effectName === name
                            ? '#484848'
                            : 'black',
                    }}
                    onClick={handleEffectClick}
                >
                    <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
                    <div className="effect-toggler-container bg-black">
                        <button
                            className="general-effect-toggler-button"
                            onClick={handleEffectToggle}
                            style={
                                isEnabled
                                    ? { backgroundColor: '#5f8f00' }
                                    : { backgroundColor: '#c00' }
                            }
                        ></button>
                        <div>
                            <label htmlFor={name + '-value-slider'}>
                                {/* <h6>
                                    Effect Value [{min}, {max}]:
                                </h6> */}
                                <h6>{description}</h6>
                            </label>
                            <input
                                type="range"
                                step={step}
                                min={min}
                                max={max}
                                value={
                                    shapeInFocus.effects.filter(
                                        (effect) => effect.effectName === name
                                    )[0].effectValue
                                }
                                defaultValue={
                                    shapeInFocus.effects.filter(
                                        (effect) => effect.effectName === name
                                    )[0].effectValue
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
