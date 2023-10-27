import Effect from './effect/Effect';

function EffectsPanel() {
    return (
        <>
            <h3 className="mb-4 ">Effects Panel</h3>
            <div className="effects">
                <Effect
                    name={'fade'}
                    min={0}
                    max={1.0}
                    step={0.01}
                    description={'INVISIBLE ------------- VISIBLE'}
                />
                <Effect
                    name={'vertical-shift'}
                    min={-1000}
                    max={1000}
                    step={5}
                    description={'UP -------------------------- DOWN'}
                />
                <Effect
                    name={'horizontal-shift'}
                    min={-1000}
                    max={1000}
                    step={5}
                    description={'LEFT ----------------------- RIGHT'}
                />
                <Effect
                    name={'scale'}
                    min={0}
                    max={1.0}
                    step={0.01}
                    description={'SMALLER ------------- BIGGER'}
                />
                <Effect
                    name={'rotate'}
                    min={-720}
                    max={720}
                    step={5}
                    description={'CCW -------------- CLOCKWISE'}
                />
            </div>
        </>
    );
}

export default EffectsPanel;
