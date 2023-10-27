import { useContext } from 'react';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function AudioChannel() {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
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
                <h6>Audio Channel: Waiting</h6>
            ) : (
                <>
                    <h6>Audio Channel</h6>
                    <div className="audio-channel-buttons-container">
                        <button
                            id="left-channel-button"
                            onClick={() => handleAudioChannelClick(false)}
                            style={{
                                backgroundColor: !effectInFocus
                                    ? '#484848'
                                    : effectInFocus.isRightChannel
                                    ? '#484848'
                                    : '#2a9fd6',
                            }}
                        >
                            Left
                        </button>
                        <button
                            id="right-channel-button"
                            onClick={() => handleAudioChannelClick(true)}
                            style={{
                                backgroundColor: !effectInFocus
                                    ? '#484848'
                                    : effectInFocus.isRightChannel
                                    ? '#2a9fd6'
                                    : '#484848',
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
