import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';

function FrequencyBin() {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);

    function handleFrequencyBinChange(e) {
        if (!effectInFocus) return;

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
                <p>Frequency Bin: Waiting</p>
            ) : (
                <>
                    <label htmlFor="frequency-bin">
                        Frequency Bin [1, 61]:
                        <br />
                        Each analyzer column is a bin
                        <br />
                    </label>
                    <input
                        type="number"
                        id="frequency-bin"
                        name="frequency-bin"
                        min="1"
                        max="61"
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
