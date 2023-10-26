import { useContext } from 'react';
import ShapeInFocusContext from '../../../context/ShapeInFocusContext';

function UnfocusShape() {
    const { shapeInFocus, setShapeInFocus } = useContext(ShapeInFocusContext);

    function handleUnfocusShapeCLick() {
        setShapeInFocus(null);
    }

    return (
        <>
            {!shapeInFocus ? (
                <h6>Unfocus Shape: Waiting</h6>
            ) : (
                <button
                    className="btn-warning mb-3 me-3"
                    onClick={handleUnfocusShapeCLick}
                >
                    Unfocus Shape
                </button>
            )}
        </>
    );
}

export default UnfocusShape;
