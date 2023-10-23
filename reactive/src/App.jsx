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

import './App.css';

function App() {
    // TODO: Update all components to show current values when shape and effect are in focus
    // TODO: Create more shapes with different sizes
    // TODO: SET XPOSITION AND YPOSITION OF SHAPES ON CANVAS
    // TODO: CHANGE ANALYZER MODE TO HAVE LESS COLUMNS
    

    // Global state
    const [currentVolume, setCurrentVolume] = useState(0);
    const [dataRate, setDataRate] = useState(100);
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [shapeInFocus, setShapeInFocus] = useState(null);
    const [effectInFocus, setEffectInFocus] = useState(null);
    const [canvasColor, setCanvasColor] = useState('#000000');

    // Check state values
    useEffect(() => {
        console.log("STATE VALUES")
    });

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
                                        <div>
                                            <MainMenu />
                                        </div>
                                        <div>
                                            <AudioAnalyzer />
                                            <Canvas />
                                        </div>
                                        <div>
                                            <ShapeEditor />
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
