import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';
import { useState } from 'react';
import './App.css';

function App() {
    const [currentVolume, setCurrentVolume] = useState(0);
    const [currentSongTime, setCurrentSongTime] = useState(0);
    const [shapePropsArray, setShapePropsArray] = useState([]);

    return (
        <>
            <ShapePropsArrayContext.Provider
                value={{ shapePropsArray, setShapePropsArray }}
            >
                <div>
                    <MainMenu />
                </div>
                <div>
                    <AudioAnalyzer
                        setCurrentVolume={setCurrentVolume}
                        setCurrentSongTime={setCurrentSongTime}
                    />
                    <Canvas
                        currentVolume={currentVolume}
                        currentSongTime={currentSongTime}
                    />
                </div>
            </ShapePropsArrayContext.Provider>
        </>
    );
}

export default App;
