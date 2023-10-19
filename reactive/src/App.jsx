import { useEffect, useState } from 'react';

import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapeEditor from './components/shape-editor/ShapeEditor';
import CanvasColorContext from './context/CanvasColorContext';
import DataRateContext from './context/DataRateContext';
import ShapeInFocusContext from './context/ShapeInFocusContext';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';
import ShapeInFocusByUniqueIdContext from './context/ShapeInFocusByUniqueIdContext';

import './App.css';

function App() {
    // Global state
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [dataRate, setDataRate] = useState(100);
    const [canvasColor, setCanvasColor] = useState('#000000');
    const [shapeInFocus, setShapeInFocus] = useState(null);
    const [shapeInFocusByUniqueId, setShapeInFocusByUniqueId] = useState(null);

    // Local state
    const [currentVolume, setCurrentVolume] = useState(0);
    const [currentSongTime, setCurrentSongTime] = useState(0);

    useEffect(() => {
        console.log(shapePropsArray)
    },[shapePropsArray])

    return (
        <>
            <ShapeInFocusByUniqueIdContext.Provider value={{ shapeInFocusByUniqueId, setShapeInFocusByUniqueId }}>
            <ShapeInFocusContext.Provider value={{ shapeInFocus, setShapeInFocus }}>
            <CanvasColorContext.Provider value={{ canvasColor, setCanvasColor }}>
            <DataRateContext.Provider value={{ dataRate, setDataRate }}>
            <ShapePropsArrayContext.Provider value={{ shapePropsArray, setShapePropsArray }}>
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
                    <div>
                        <ShapeEditor />
                    </div>
                </div>
            </ShapePropsArrayContext.Provider>
            </DataRateContext.Provider>
            </CanvasColorContext.Provider>
            </ShapeInFocusContext.Provider>
            </ShapeInFocusByUniqueIdContext.Provider>
        </>
    );
}

export default App;
