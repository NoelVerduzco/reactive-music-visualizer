// import { useContext } from 'react';
// import ShapeInFocusByUniqueIdContext from '../../../../context/ShapeInFocusByUniqueIdContext';
// import ShapeInFocusContext from '../../../../context/ShapeInFocusContext';
// import ShapePropsArrayContext from '../../../../context/ShapePropsArrayContext';

// function FadeEffectToggler() {
//     const { shapeInFocusByUniqueId } = useContext(
//         ShapeInFocusByUniqueIdContext
//     );
//     const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);
//     const { shapePropsArray, setShapePropsArray } = useContext(
//         ShapePropsArrayContext
//     );

    // function handleGeneralEffectToggle() {
    //     let copiedShape = { ...shapeInFocus };
    //     copiedShape.isFadeEnabled = copiedShape.isFadeEnabled ? false : true;

    //     let copiedArray = [...shapePropsArray];

    //     for (let i = 0; i < copiedArray.length; i++) {
    //         if (copiedArray[i].uniqueId === shapeInFocusByUniqueId) {
    //             copiedArray[i] = copiedShape;
    //             setShapeInFocus(copiedShape);
    //             setShapePropsArray(copiedArray);
    //         }
    //     }
    // }

//     function handleSpecificEffectClick(boolean) {
//         let copiedShape = { ...shapeInFocus };
//         copiedShape.isFadeIn = boolean;

//         let copiedArray = [...shapePropsArray];

//         for (let i = 0; i < copiedArray.length; i++) {
//             if (copiedArray[i].uniqueId === shapeInFocusByUniqueId) {
//                 copiedArray[i] = copiedShape;
//                 setShapeInFocus(copiedShape);
//                 setShapePropsArray(copiedArray);
//             }
//         }
//     }

//     return (
//         <>
//             {shapeInFocus === null ? (
//                 <p>Fade Effect: Waiting for shape to be in focus</p>
//             ) : (
//                 <>
                    // <p>Fade Effect Toggler</p>
                    // <div className="effect-toggler-container">
                    //     <button
                    //         className="general-effect-toggler-button"
                    //         onClick={handleGeneralEffectToggle}
                    //         style={
                    //             shapeInFocus.isFadeEnabled
                    //                 ? { backgroundColor: 'green' }
                    //                 : { backgroundColor: 'red' }
                    //         }
                    //     ></button>
//                         <div className="specific-effect-toggler-container">
//                             <div className="specific-effect-toggler">
//                                 <p>Fade In</p>
//                                 <button
//                                     id="fade-in"
//                                     className="specific-effect-toggler-button"
//                                     onClick={() =>
//                                         handleSpecificEffectClick(true)
//                                     }
//                                     style={
//                                         shapeInFocus.isFadeIn
//                                             ? { backgroundColor: 'green' }
//                                             : { backgroundColor: 'red' }
//                                     }
//                                 ></button>
//                             </div>
//                             <div className="specific-effect-toggler">
//                                 <p>Fade Out</p>
//                                 <button
//                                     id="fade-out"
//                                     className="specific-effect-toggler-button"
//                                     onClick={() =>
//                                         handleSpecificEffectClick(false)
//                                     }
//                                     style={
//                                         shapeInFocus.isFadeIn
//                                             ? { backgroundColor: 'red' }
//                                             : { backgroundColor: 'green' }
//                                     }
//                                 ></button>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// }

// export default FadeEffectToggler;
