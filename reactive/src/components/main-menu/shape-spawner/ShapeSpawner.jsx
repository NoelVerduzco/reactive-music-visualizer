import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <>
            <h3 className='mb-4'>Shape Spawner</h3>
            <div className="d-flex flex-wrap btn btn-outline-warning">
                <Shape shapeName="shape-spawner square-sm" />
                <Shape shapeName="shape-spawner square-md" />
                <Shape shapeName="shape-spawner square-lg" />
                <Shape shapeName="shape-spawner rectangle-hor-sm" />
                <Shape shapeName="shape-spawner rectangle-hor-md" />
                <Shape shapeName="shape-spawner rectangle-hor-lg" />
                <Shape shapeName="shape-spawner rectangle-ver-sm" />
                <Shape shapeName="shape-spawner rectangle-ver-md" />
                <Shape shapeName="shape-spawner rectangle-ver-lg" />
                <Shape shapeName="shape-spawner circle-sm" />
                <Shape shapeName="shape-spawner circle-md" />
                <Shape shapeName="shape-spawner circle-lg" />
                <Shape shapeName="shape-spawner ellipse-hor-sm" />
                <Shape shapeName="shape-spawner ellipse-hor-md" />
                <Shape shapeName="shape-spawner ellipse-hor-lg" />
                <Shape shapeName="shape-spawner ellipse-ver-sm" />
                <Shape shapeName="shape-spawner ellipse-ver-md" />
                <Shape shapeName="shape-spawner ellipse-ver-lg" />
                <Shape shapeName="shape-spawner arch-hor-sm" />
                <Shape shapeName="shape-spawner arch-hor-md" />
                <Shape shapeName="shape-spawner arch-hor-lg" />
                <Shape shapeName="shape-spawner arch-ver-sm" />
                <Shape shapeName="shape-spawner arch-ver-md" />
                <Shape shapeName="shape-spawner arch-ver-lg" />
                <Shape shapeName="shape-spawner triangle-sm" />
                <Shape shapeName="shape-spawner triangle-md" />
                <Shape shapeName="shape-spawner triangle-lg" />
                <Shape shapeName="shape-spawner spark-sm" />
                <Shape shapeName="shape-spawner spark-md" />
                <Shape shapeName="shape-spawner spark-lg" />
            </div>
        </>
    );
}

export default ShapeSpawner;
