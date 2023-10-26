import ShapeColor from './shape-color/ShapeColor';
import ShapePosition from './shape-position/ShapePosition';

function Properties() {
    return (
        <>
            <ShapeColor />
            <ShapePosition position={"xPosition"} min={1} max={1800} step={1} />
            <ShapePosition position={"yPosition"} min={1} max={1100} step={1} />
        </>
    );
}

export default Properties;
