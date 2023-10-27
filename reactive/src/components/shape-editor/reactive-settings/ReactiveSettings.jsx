import AudioChannel from './audio-channel/AudioChannel';
import FrequencyBin from './frequency-bin/FrequencyBin';

function ReactiveSettings() {
    return (
        <>
            <h3 className='mb-4'>Reactive Settings</h3>
            <div className='btn btn-outline-secondary'>
            <AudioChannel />

            </div>
            <div className='btn btn-outline-secondary'>
            <FrequencyBin min={1} max={31} />

            </div>
        </>
    );
}

export default ReactiveSettings;
