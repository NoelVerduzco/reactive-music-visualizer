import { useContext } from 'react';
import EffectInFocusContext from '../../../../context/EffectInFocusContext';
import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

function Shape({ shapeName }) {
    const { shapePropsArray, setShapePropsArray } = useContext(
        ShapePropsArrayContext
    );
    const { setShapeInFocus } = useContext(ShapeInFocusContext);
    const { setEffectInFocus } = useContext(EffectInFocusContext);

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
        // effectValue ranges [0,1]
        const fadeEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'fade',
            isEnabled: false,
            effectValue: 0.5,
            isRightChannel: false,
            frequencyBin: 0,
            shapeId: 0,
        };

        // effectValue ranges [-N,N]
        const verticalShiftEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'vertical-shift',
            isEnabled: false,
            effectValue: 0,
            isRightChannel: false,
            frequencyBin: 0,
            shapeId: 0,
        };

        // effectValue ranges [-N,N]
        const horizontalShiftEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'horizontal-shift',
            isEnabled: false,
            effectValue: 0,
            isRightChannel: false,
            frequencyBin: 0,
            shapeId: 0,
        };

        // effectValue ranges [0,1]
        const scaleEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'scale',
            isEnabled: false,
            effectValue: 0.5,
            isRightChannel: false,
            frequencyBin: 0,
            shapeId: 0,
        };

        // effectValue ranges [-n*360,n*360]
        const rotateEffect = {
            effectId: 0,
            uniqueId: makeRandomUniqueId(8),
            effectName: 'rotate',
            isEnabled: false,
            effectValue: 0,
            isRightChannel: false,
            frequencyBin: 0,
            shapeId: 0,
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
            shapeColor: '#ffffff',
            xPosition: 0,
            yPosition: 0,
            templateId: 0,
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
