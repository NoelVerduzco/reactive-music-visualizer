import AudioChannel from './audio-channel/AudioChannel';
import FrequencyBin from './frequency-bin/FrequencyBin';

function ReactiveSettings() {
    return (
        <>
            <h1>Reactive Settings</h1>
            <AudioChannel />
            <FrequencyBin />
        </>
    );
}

export default ReactiveSettings;
