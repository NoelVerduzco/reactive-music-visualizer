import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <>
            <h3>Shape Spawner</h3>
            <div className="d-flex flex-wrap">
                <Shape shapeName="square-sm" />
                <Shape shapeName="square-md" />
                <Shape shapeName="square-lg" />
                <Shape shapeName="rectangle-hor-sm" />
                <Shape shapeName="rectangle-hor-md" />
                <Shape shapeName="rectangle-hor-lg" />
                <Shape shapeName="rectangle-ver-sm" />
                <Shape shapeName="rectangle-ver-md" />
                <Shape shapeName="rectangle-ver-lg" />
                <Shape shapeName="circle-sm" />
                <Shape shapeName="circle-md" />
                <Shape shapeName="circle-lg" />
                <Shape shapeName="ellipse-hor-sm" />
                <Shape shapeName="ellipse-hor-md" />
                <Shape shapeName="ellipse-hor-lg" />
                <Shape shapeName="ellipse-ver-sm" />
                <Shape shapeName="ellipse-ver-md" />
                <Shape shapeName="ellipse-ver-lg" />
                <Shape shapeName="arch-hor-sm" />
                <Shape shapeName="arch-hor-md" />
                <Shape shapeName="arch-hor-lg" />
                <Shape shapeName="arch-ver-sm" />
                <Shape shapeName="arch-ver-md" />
                <Shape shapeName="arch-ver-lg" />
                <Shape shapeName="triangle-sm" />
                <Shape shapeName="triangle-md" />
                <Shape shapeName="triangle-lg" />
                <Shape shapeName="spark-sm" />
                <Shape shapeName="spark-md" />
                <Shape shapeName="spark-lg" />
            </div>
        </>
    );
}

export default ShapeSpawner;
