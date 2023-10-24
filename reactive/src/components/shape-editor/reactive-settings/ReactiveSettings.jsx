import AudioChannel from './audio-channel/AudioChannel';
import FrequencyBin from './frequency-bin/FrequencyBin';

function ReactiveSettings() {
    return (
        <>
            <h3>Reactive Settings</h3>
            <AudioChannel />
            <FrequencyBin min={1} max={31} />
        </>
    );
}

export default ReactiveSettings;
