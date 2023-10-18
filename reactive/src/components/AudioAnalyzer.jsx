import AudioMotionAnalyzer from 'audiomotion-analyzer';
import { useEffect, useState } from 'react';

function AudioAnalyzer({
    isPlaying,
    setIsPlaying,
    setCurrentVolume,
    setCurrentSongTime,
}) {
    const [audioElement, setAudioElement] = useState(null);
    const [uploadElement, setUploadElement] = useState(null);
    const [audioMotion, setAudioMotion] = useState(null);

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
                    mode: 4,
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
            let dataRate = 50;
            const currentVolumeId = setInterval(
                () => getCurrentVolume(),
                dataRate
            );
            const currentTimeId = setInterval(
                () => getCurrentSongTime(),
                dataRate
            );
            return () => {
                clearInterval(currentVolumeId);
                clearInterval(currentTimeId);
            };
        }
    }, [isPlaying]);

    const getCurrentVolume = () => {
        // Frequency bins [0 - 60]
        let frequencyBin = 13;
        // Left/Right audio channels [0 - 1]
        let leftRightAudioChannel = 0;
        let volume =
            audioMotion.getBars()[frequencyBin].value[leftRightAudioChannel];
        setCurrentVolume(volume);
    };

    const getCurrentSongTime = () => {
        let songTime = audioElement.currentTime;
        setCurrentSongTime(songTime);
    };

    return (
        <div className="analyzer-box">
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
