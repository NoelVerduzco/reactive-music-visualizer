import Effect from './effect/Effect';

function EffectsPanel() {
    return (
        <>
            <p>Effects Panel</p>
            <Effect name={'fade'} min={0} max={1.0} step={0.1} />
            <Effect name={'vertical-shift'} min={-500} max={500} step={5} />
            <Effect name={'horizontal-shift'} min={-500} max={500} step={5} />
            <Effect name={'scale'} min={0} max={1.0} step={0.1} />
            <Effect name={'rotate'} min={-720} max={720} step={5} />
        </>
    );
}

export default EffectsPanel;
