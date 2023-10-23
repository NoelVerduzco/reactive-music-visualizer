import AudioMotionAnalyzer from 'audiomotion-analyzer';
import { useContext, useEffect, useState } from 'react';
import CurrentVolumeContext from '../context/CurrentVolumeContext';
import DataRateContext from '../context/DataRateContext';

function AudioAnalyzer() {
    const { dataRate } = useContext(DataRateContext);
    const { setCurrentVolume } = useContext(CurrentVolumeContext);

    const [audioElement, setAudioElement] = useState(null);
    const [uploadElement, setUploadElement] = useState(null);
    const [audioMotion, setAudioMotion] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Find the audio element
        setAudioElement(document.getElementById('audio'));
    }, []);

    useEffect(() => {
        if (audioElement && !uploadElement) {
            setUploadElement(
                // Upload audio files
                document
                    .getElementById('upload')
                    .addEventListener('change', (e) => {
                        const fileBlob = e.target.files[0];

                        if (fileBlob) {
                            audioElement.src = URL.createObjectURL(fileBlob);
                            audioElement.play();
                            setIsPlaying(!audioElement.paused);
                        }
                    })
            );
        }

        if (audioElement && !audioMotion) {
            setAudioMotion(
                // Instantiate the audio analyzer
                new AudioMotionAnalyzer(document.getElementById('container'), {
                    source: audioElement,
                    height: 1080,
                    width: 1920,
                    mode: 6, // mode 6 provides 31 frequency bins
                    gradient: 'prism',
                    channelLayout: 'dual-vertical',
                    barSpace: 0.5,
                    ledBars: true,
                    splitGradient: true,
                    showPeaks: false,
                })
            );
        }
    }, [audioElement]);

    // Get volume data
    useEffect(() => {
        if (isPlaying) {
            // Data rate (milliseconds)
            const currentVolumeId = setInterval(
                () => getCurrentVolume(),
                dataRate
            );
            return () => {
                clearInterval(currentVolumeId);
            };
        }
    }, [isPlaying]);

    const getCurrentVolume = () => {
        setCurrentVolume(audioMotion.getBars())
    };

    return (
        <div id="audio-analyzer">
            {/* Analyzer container */}
            <div id="container"></div>

            {/* Audio element */}
            <audio id="audio" controls crossOrigin="true"></audio>

            {/* File upload element */}
            <label>
                Upload audio file:
                <input id="upload" type="file" accept="audio/*" />
            </label>
        </div>
    );
}
export default AudioAnalyzer;
