import { useState } from 'react';
import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';
import DataRateContext from './context/DataRateContext';
import CanvasColorContext from './context/CanvasColorContext';
import './App.css';

function App() {
    // Global state
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [dataRate, setDataRate] = useState(100);
    const [canvasColor, setCanvasColor] = useState('#000000');

    // Local state
    const [currentVolume, setCurrentVolume] = useState(0);
    const [currentSongTime, setCurrentSongTime] = useState(0);

    return (
        <>
            <CanvasColorContext.Provider
                value={{ canvasColor, setCanvasColor }}
            >
                <DataRateContext.Provider value={{ dataRate, setDataRate }}>
                    <ShapePropsArrayContext.Provider
                        value={{ shapePropsArray, setShapePropsArray }}
                    >
                        <div id="main-components">
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
                        </div>
                    </ShapePropsArrayContext.Provider>
                </DataRateContext.Provider>
            </CanvasColorContext.Provider>
        </>
    );
}

export default App;
