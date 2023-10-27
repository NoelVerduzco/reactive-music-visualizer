import AudioMotionAnalyzer from 'audiomotion-analyzer';
import { useContext, useEffect, useState } from 'react';
import CurrentVolumeContext from '../context/CurrentVolumeContext';
import DataRateContext from '../context/DataRateContext';
import IsMusicPlayingContext from '../context/IsMusicPlayingContext';

function AudioAnalyzer() {
    const { dataRate } = useContext(DataRateContext);
    const { setCurrentVolume } = useContext(CurrentVolumeContext);
    const { isMusicPlaying, setIsMusicPlaying } = useContext(
        IsMusicPlayingContext
    );

    const [audioElement, setAudioElement] = useState(null);
    const [uploadElement, setUploadElement] = useState(null);
    const [audioMotion, setAudioMotion] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        // Find the audio element
        setAudioElement(document.getElementById('audio'));
    }, []);

    useEffect(() => {
        // Upload audio files
        if (audioElement && !uploadElement) {
            setUploadElement(
                document
                    .getElementById('upload')
                    .addEventListener('change', (e) => {
                        const fileBlob = e.target.files[0];

                        if (fileBlob) {
                            audioElement.src = URL.createObjectURL(fileBlob);
                            audioElement.play();
                        }
                    })
            );
        }

        // Instantiate the audio analyzer
        if (audioElement && !audioMotion) {
            setAudioMotion(
                new AudioMotionAnalyzer(document.getElementById('container'), {
                    source: audioElement,
                    height: 800,
                    width: 1800,
                    mode: 6, // mode 6 provides 31 frequency bins
                    gradient: 'prism',
                    channelLayout: 'dual-vertical',
                    barSpace: 0.5,
                    ledBars: true,
                    splitGradient: true,
                    showPeaks: false,
                    ansiBands: true,
                })
            );
        }
    }, [audioElement]);

    useEffect(() => {
        // Get current time data
        if (audioElement) {
            const currentTimeId = setInterval(() => getCurrentTime(), 100);
            return () => {
                clearInterval(currentTimeId);
            };
        }
    });

    const getCurrentTime = () => {
        setCurrentTime(audioElement.currentTime);
    };

    useEffect(() => {
        // Get is playing
        if (audioElement) {
            const isMusicPlayingId = setInterval(
                () => getIsMusicPlaying(),
                100
            );
            return () => {
                clearInterval(isMusicPlayingId);
            };
        }
    });

    const getIsMusicPlaying = () => {
        setIsMusicPlaying(!audioElement.paused);
    };

    useEffect(() => {
        // Get "volume" data (not actually volume until frequency bin and audio channel are connected)
        if (isMusicPlaying) {
            // Data rate (milliseconds)
            const currentVolumeId = setInterval(
                () => getCurrentVolume(),
                dataRate
            );
            return () => {
                clearInterval(currentVolumeId);
            };
        }
    }, [isMusicPlaying]);

    const getCurrentVolume = () => {
        setCurrentVolume(audioMotion.getBars());
    };

    // Create number label 1 - 31 for frequency bins
    const [frequencyBins, setFrequencyBins] = useState([]);

    useEffect(() => {
        let binColumns = [];
        for (let i = 1; i < 32; i++) {
            binColumns[i] = i;
        }
        setFrequencyBins(binColumns);
    }, []);

    return (
        <div id="audio-analyzer">
            {/* Audio element */}
            <audio id="audio" controls crossOrigin="true"></audio>

            {/* File upload element */}
            <label>
                Upload audio file:
                <input id="upload" type="file" accept="audio/*" />
            </label>

            {/* Analyzer frequency bin number label */}
            <div className="d-flex justify-content-around">
                {frequencyBins.map((bin) => {
                    return (
                        <div className="">
                            <h6>{bin}</h6>
                        </div>
                    );
                })}
            </div>

            {/* Analyzer container */}
            <div id="container"></div>
        </div>
    );
}
export default AudioAnalyzer;
