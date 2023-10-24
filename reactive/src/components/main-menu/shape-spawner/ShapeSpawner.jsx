import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <div>
            <h3>Shape Spawner</h3>
            <Shape shapeName="square" />
            <Shape shapeName="rectangle" />
            <Shape shapeName="circle" />
            <Shape shapeName="oval" />
        </div>
    );
}

export default ShapeSpawner;
