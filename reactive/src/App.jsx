import AudioAnalyzer from './components/AudioAnalyzer';
import AnimatedShapes from './components/AnimatedShapes';
import { useState } from 'react';
import './App.css';

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(0);
    const [currentSongTime, setCurrentSongTime] = useState(0);

    return (
        <div>
            <AudioAnalyzer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setCurrentVolume={setCurrentVolume}
                setCurrentSongTime={setCurrentSongTime}
            />
            <AnimatedShapes
                currentVolume={currentVolume}
                currentSongTime={currentSongTime}
            />
        </div>
    );
}

export default App;
