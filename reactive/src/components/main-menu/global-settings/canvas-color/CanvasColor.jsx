import { useContext } from 'react';
import CanvasColorContext from '../../../../context/CanvasColorContext';

function CanvasColor() {
    const { setCanvasColor } = useContext(CanvasColorContext);

    function handleCanvasColorChange(e) {
        console.log(e.target.value);
        setCanvasColor(e.target.value);
    }

    return (
        <div>
            <label htmlFor="canvas-color">Canvas color: </label>
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
