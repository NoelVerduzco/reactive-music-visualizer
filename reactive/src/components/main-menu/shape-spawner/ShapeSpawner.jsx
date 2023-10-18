import Shape from './shape/Shape';

function ShapeSpawner() {
    return (
        <>
            <Shape shapeName="square" />
            <Shape shapeName="rectangle" />
            <Shape shapeName="circle" />
            <Shape shapeName="oval" />
            <Shape shapeName="triangle" />
            <Shape shapeName="trapezoid" />
            <Shape shapeName="star-five" />
        </>
    );
}

export default ShapeSpawner;
