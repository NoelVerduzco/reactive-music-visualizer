import { useEffect, useState } from 'react';

import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapeEditor from './components/shape-editor/ShapeEditor';
import CanvasColorContext from './context/CanvasColorContext';
import DataRateContext from './context/DataRateContext';
import EffectInFocusContext from './context/EffectInFocusContext';
import ShapeInFocusContext from './context/ShapeInFocusContext';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';

import './App.css';

function App() {
    // TODO: Update shape size sliders with current value
    // TODO: Update shape color picker with current value

    // Global state
    const [dataRate, setDataRate] = useState(100);
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [shapeInFocus, setShapeInFocus] = useState(null);
    const [effectInFocus, setEffectInFocus] = useState(null);
    const [canvasColor, setCanvasColor] = useState('#000000');

    // Local state
    const [currentVolume, setCurrentVolume] = useState(0);
    const [currentSongTime, setCurrentSongTime] = useState(0);

    useEffect(() => {
        // console.log(shapePropsArray);
        // console.log(shapeInFocus);
        // console.log(dataRate);
        // console.log(canvasColor);
        // if (shapeInFocus) {
        //     console.log(shapeInFocus.effects.filter((effect) => effect.effectName === 'rotate')[0].isEnabled)
        // }
        // if(shapePropsArray.length > 0){
        //     console.log(shapePropsArray[0].effects[0].isRightChannel)
        // }
        // if(shapePropsArray.length > 0){
        //     console.log(shapePropsArray[0].effects[0].frequencyBin)
        //     console.log(shapePropsArray[1].effects[0].frequencyBin)
        // }
        // console.log(effectInFocus)
    });

    return (
        <>
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
                                value={{ shapePropsArray, setShapePropsArray }}
                            >
                                <div id="main-components">
                                    <div>
                                        <MainMenu />
                                    </div>
                                    <div>
                                        <AudioAnalyzer
                                            setCurrentVolume={setCurrentVolume}
                                            setCurrentSongTime={
                                                setCurrentSongTime
                                            }
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
            </EffectInFocusContext.Provider>
        </>
    );
}

export default App;
