import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <div>
            <h1>Shape Spawner</h1>
            <Shape shapeName="square" />
            <Shape shapeName="rectangle" />
            <Shape shapeName="circle" />
            <Shape shapeName="oval" />
        </div>
    );
}

export default ShapeSpawner;
