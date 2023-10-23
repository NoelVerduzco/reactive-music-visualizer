import { useContext } from 'react';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';

function Shape({ shapeName }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { setShapeInFocus } = useContext(ShapeInFocusContext);
    const { effectInFocus, setEffectInFocus } =
    useContext(EffectInFocusContext);

    function makeRandomUniqueId(length) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    function handleCreateShapeClick(shapeName) {
        // value ranges [0,1]
        const fadeEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'fade',
            isEnabled: false,
            value: 0.5,
            isRightChannel: false,
            frequencyBin: 0,
        };

        // value ranges [-N,N]
        const verticalShiftEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'vertical-shift',
            isEnabled: false,
            value: 0,
            isRightChannel: false,
            frequencyBin: 0,
        };

        // value ranges [-N,N]
        const horizontalShiftEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'horizontal-shift',
            isEnabled: false,
            value: 0,
            isRightChannel: false,
            frequencyBin: 0,
        };

        // value ranges [0,1]
        const scaleEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'scale',
            isEnabled: false,
            value: 0.5,
            isRightChannel: false,
            frequencyBin: 0,
        };

        // value ranges [-720,720]
        const rotateEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'rotate',
            isEnabled: false,
            value: 0,
            isRightChannel: false,
            frequencyBin: 0,
        };

        const effects = [
            fadeEffect,
            verticalShiftEffect,
            horizontalShiftEffect,
            scaleEffect,
            rotateEffect,
        ];

        const shape = {
            shapeId: 0,
            uniqueId: makeRandomUniqueId(8),
            shapeName: shapeName,
            className: 'reactive ' + shapeName,
            color: '#ffffff',
            size: 1,
            xPosition: 0,
            yPosition: 0,
            effects: effects,
            initial: {},
            animate: {},
            transition: { type: 'spring', stiffness: 500, damping: 25 },
        };

        setEffectInFocus(null);
        setShapeInFocus(shape);
        setShapePropsArray([...shapePropsArray, shape]);
    }

    return (
        <div id="display-shape">
            <div
                className={shapeName}
                onClick={() => handleCreateShapeClick(shapeName)}
            ></div>
        </div>
    );
}

export default Shape;
