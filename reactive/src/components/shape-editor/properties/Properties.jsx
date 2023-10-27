import ShapeColor from './shape-color/ShapeColor';
import ShapePosition from './shape-position/ShapePosition';

function Properties() {
    return (
        <>
        <div className='btn btn-outline-secondary'>
            <ShapeColor />
        </div>
        <div className='btn btn-outline-secondary'>
            <ShapePosition position={"xPosition"} min={1} max={1800} step={1} />
        </div>
        <div className='btn btn-outline-secondary'>
            <ShapePosition position={"yPosition"} min={1} max={1100} step={1} />
        </div>
        </>
    );
}

export default Properties;
