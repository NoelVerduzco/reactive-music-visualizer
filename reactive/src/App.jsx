import { useEffect, useState } from 'react';

import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapeEditor from './components/shape-editor/ShapeEditor';
import CanvasColorContext from './context/CanvasColorContext';
import CurrentVolumeContext from './context/CurrentVolumeContext';
import DataRateContext from './context/DataRateContext';
import EffectInFocusContext from './context/EffectInFocusContext';
import ShapeInFocusContext from './context/ShapeInFocusContext';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';

import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';

function App() {
    // TODO: Update canvasColor and dateRate to show current values when template is loaded
    // TODO: Create more shapes with different sizes

    // Global state
    const [currentVolume, setCurrentVolume] = useState(0);
    const [dataRate, setDataRate] = useState(100);
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [shapeInFocus, setShapeInFocus] = useState(null);
    const [effectInFocus, setEffectInFocus] = useState(null);
    const [canvasColor, setCanvasColor] = useState('#000000');

    return (
        <>
            <CurrentVolumeContext.Provider
                value={{ currentVolume, setCurrentVolume }}
            >
                <EffectInFocusContext.Provider
                    value={{ effectInFocus, setEffectInFocus }}
                >
                    <ShapeInFocusContext.Provider
                        value={{ shapeInFocus, setShapeInFocus }}
                    >
                        <CanvasColorContext.Provider
                            value={{ canvasColor, setCanvasColor }}
                        >
                            <DataRateContext.Provider
                                value={{ dataRate, setDataRate }}
                            >
                                <ShapePropsArrayContext.Provider
                                    value={{
                                        shapePropsArray,
                                        setShapePropsArray,
                                    }}
                                >
                                    <div id="main-components">
                                        <div id="audio-and-canvas-container">
                                            <Canvas />
                                            <AudioAnalyzer />
                                        </div>
                                        <div
                                            id="main-menu-container"
                                            className="outer-container bg-info"
                                        >
                                            <div className="inner-container bg-black">
                                                <MainMenu />
                                            </div>
                                        </div>
                                        <div
                                            id="shape-editor-container"
                                            className="outer-container bg-info"
                                        >
                                            <div className="inner-container bg-black">
                                                <ShapeEditor />
                                            </div>
                                        </div>
                                    </div>
                                </ShapePropsArrayContext.Provider>
                            </DataRateContext.Provider>
                        </CanvasColorContext.Provider>
                    </ShapeInFocusContext.Provider>
                </EffectInFocusContext.Provider>
            </CurrentVolumeContext.Provider>
        </>
    );
}

export default App;
