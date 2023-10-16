import AudioMotionAnalyzer from 'audiomotion-analyzer';
import { useEffect, useState } from 'react';

function AudioAnalyzer({ isPlaying, setIsPlaying, setSoundData }) {
    const [audioEl, setAudioEl] = useState();
    const [audioMotion, setAudioMotion] = useState();

    useEffect(() => {
        setAudioEl(document.getElementById('audio'));
    }, []);

    useEffect(() => {
        if (audioEl) {
            // Upload audio files only after there is a non-null audio element (audioEl)
            document
                .getElementById('upload')
                .addEventListener('change', (e) => {
                    const fileBlob = e.target.files[0];

                    if (fileBlob) {
                        audioEl.src = URL.createObjectURL(fileBlob);
                        audioEl.play();
                        setIsPlaying(!audioEl.paused);
                    }
                });

            setAudioMotion(
                // Instantiate the analyzer only after there is a non-null audio element (audioEl)
                new AudioMotionAnalyzer(document.getElementById('container'), {
                    source: audioEl,
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
    }, [audioEl]);

    useEffect(() => {
        if (isPlaying) {
            const timerID = setInterval(() => getSoundData(), 10);
            return () => {
                clearInterval(timerID);
            };
        }
    }, [isPlaying]);

    const getSoundData = () => {
        console.log(audioMotion.getBars()[13].value[0]); // First bin, left channel audio energy values
        setSoundData(audioMotion.getBars()[13].value[0]);
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
