import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import AudioAnalyzer from './components/AudioAnalyzer';
import Canvas from './components/Canvas';
import MainMenu from './components/main-menu/MainMenu';
import ShapeEditor from './components/shape-editor/ShapeEditor';
import CanvasColorContext from './context/CanvasColorContext';
import CurrentTemplateContext from './context/CurrentTemplateContext';
import CurrentVolumeContext from './context/CurrentVolumeContext';
import DataRateContext from './context/DataRateContext';
import EffectInFocusContext from './context/EffectInFocusContext';
import IsMusicPlayingContext from './context/IsMusicPlayingContext';
import ShapeInFocusContext from './context/ShapeInFocusContext';
import ShapePropsArrayContext from './context/ShapePropsArrayContext';

import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';

function App() {
    // TODO: Fix scale effect

    const defaultTemplate = {
        templateId: 0,
        templateName: '',
        canvasColor: '#000000',
        dataRate: 100,
        isActive: 1,
        shapes: [],
    };

    // Global state
    const [currentTemplate, setCurrentTemplate] = useState(defaultTemplate);
    const [shapePropsArray, setShapePropsArray] = useState([]);
    const [shapeInFocus, setShapeInFocus] = useState(null);
    const [effectInFocus, setEffectInFocus] = useState(null);
    const [canvasColor, setCanvasColor] = useState('#000000');
    const [dataRate, setDataRate] = useState(100);
    const [currentVolume, setCurrentVolume] = useState(0);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    return (
        <>
            <IsMusicPlayingContext.Provider
                value={{ isMusicPlaying, setIsMusicPlaying }}
            >
                <CurrentTemplateContext.Provider
                    value={{ currentTemplate, setCurrentTemplate }}
                >
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
                                            <Toaster />
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
                </CurrentTemplateContext.Provider>
            </IsMusicPlayingContext.Provider>
        </>
    );
}

export default App;
