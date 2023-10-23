import AudioChannel from './audio-channel/AudioChannel';
import FrequencyBin from './frequency-bin/FrequencyBin';

function ReactiveSettings() {
    return (
        <>
            <h1>Reactive Settings</h1>
            <AudioChannel />
            <FrequencyBin min={1} max={31} />
        </>
    );
}

export default ReactiveSettings;
