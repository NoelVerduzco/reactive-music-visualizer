import AudioAnalyzer from './components/AudioAnalyzer';
import AnimatedShapes from './components/AnimatedShapes';
import { useState } from 'react';
import './App.css';

function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [soundData, setSoundData] = useState();

    return (
        <div>
            <AudioAnalyzer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setSoundData={setSoundData}
            />
            <AnimatedShapes isPlaying={isPlaying} soundData={soundData} />
        </div>
    );
}

export default App;
