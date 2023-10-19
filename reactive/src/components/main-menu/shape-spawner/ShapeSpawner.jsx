import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <div>
            <h1>Shape Spawner</h1>
            <Shape shapeName="square" />
            <Shape shapeName="rectangle" />
            <Shape shapeName="trapezoid" />
            <Shape shapeName="circle" />
            <Shape shapeName="oval" />
            <Shape shapeName="triangle" />
            <Shape shapeName="star-five" />
        </div>
    );
}

export default ShapeSpawner;
