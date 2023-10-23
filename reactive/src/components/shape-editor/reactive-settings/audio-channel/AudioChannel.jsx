import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';

function AudioChannel() {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { effectInFocus, setEffectInFocus } =
        useContext(EffectInFocusContext);

    function handleAudioChannelClick(boolean) {
        if (!effectInFocus) return;

        let copiedEffect = { ...effectInFocus };
        copiedEffect.isRightChannel = boolean;
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
                <p>Audio Channel: Waiting</p>
            ) : (
                <>
                    <p>Audio Channel</p>
                    <div className="audio-channel-buttons-container">
                        <button
                            id="left-channel-button"
                            onClick={() => handleAudioChannelClick(false)}
                            style={{
                                backgroundColor: !effectInFocus
                                    ? 'grey'
                                    : effectInFocus.isRightChannel
                                    ? 'grey'
                                    : 'blue',
                            }}
                        >
                            Left
                        </button>
                        <button
                            id="right-channel-button"
                            onClick={() => handleAudioChannelClick(true)}
                            style={{
                                backgroundColor: !effectInFocus
                                    ? 'grey'
                                    : effectInFocus.isRightChannel
                                    ? 'blue'
                                    : 'grey',
                            }}
                        >
                            Right
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default AudioChannel;
