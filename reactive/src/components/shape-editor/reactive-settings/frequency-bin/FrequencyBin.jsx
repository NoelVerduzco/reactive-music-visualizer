import { useContext } from 'react';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function FrequencyBin({ min, max }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);

    function handleFrequencyBinChange(e) {
        if (!effectInFocus) return;
        if (e.target.value > max || e.target.value < min) return;

        let copiedEffect = { ...effectInFocus };
        copiedEffect.frequencyBin = e.target.value - 1;
        setEffectInFocus(copiedEffect);

        let copiedShape = { ...shapeInFocus };
        for (let i = 0; i < copiedShape.effects.length; i++) {
            if (copiedShape.effects[i].effectName === copiedEffect.effectName) {
                copiedShape.effects[i] = copiedEffect;
                setShapeInFocus(copiedShape);
                break;
            }
        }

        let copiedArray = [...shapePropsArray];
        for (let i = 0; i < copiedArray.length; i++) {
            if (copiedArray[i].uniqueId === copiedShape.uniqueId) {
                copiedArray[i] = copiedShape;
                setShapePropsArray(copiedArray);
                break;
            }
        }
    }

    return (
        <>
            {!shapeInFocus || !effectInFocus ? (
                <h6>Frequency Bin: Waiting</h6>
            ) : (
                <>
                    <label htmlFor="frequency-bin">
                        <h6>
                            Frequency Bin [{min}, {max}]:
                        </h6>
                        <h6>Each analyzer column is a bin</h6>
                    </label>
                    <input
                        type="number"
                        id="frequency-bin"
                        name="frequency-bin"
                        min={min}
                        max={max}
                        defaultValue={effectInFocus.frequencyBin + 1}
                        value={effectInFocus.frequencyBin + 1}
                        onChange={(e) => handleFrequencyBinChange(e)}
                    />
                </>
            )}
        </>
    );
}

export default FrequencyBin;
