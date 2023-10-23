import { useContext, useEffect, useState } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';

function Effect({ name, min, max, step }) {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);
    const [isEnabled, setIsEnabled] = useState(false);

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

    return (
        <>
            {!shapeInFocus ? (
                <p>Effect: Waiting</p>
            ) : (
                <div
                    className="effect-container"
                    style={{ border: '1px solid red', backgroundColor: !effectInFocus ? "red" : (effectInFocus.effectName === name ? "green" : "red") }}
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
