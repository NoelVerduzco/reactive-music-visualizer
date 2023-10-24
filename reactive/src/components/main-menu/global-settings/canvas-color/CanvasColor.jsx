import { useContext } from 'react';
import CanvasColorContext from '../../../../context/CanvasColorContext';

function CanvasColor() {
    const { setCanvasColor } = useContext(CanvasColorContext);

    function handleCanvasColorChange(e) {
        setCanvasColor(e.target.value);
    }

    return (
        <div>
            <label htmlFor="canvas-color">
                <h6>Canvas color:</h6>
            </label>
            <br />
            <input
                type="color"
                id="canvas-color"
                name="canvas-color"
                defaultValue="#000000"
                onChange={(e) => handleCanvasColorChange(e)}
            />
        </div>
    );
}

export default CanvasColor;
