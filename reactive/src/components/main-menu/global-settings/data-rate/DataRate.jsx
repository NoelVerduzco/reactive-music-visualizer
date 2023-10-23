import { useContext } from 'react';
import DataRateContext from '../../../../context/DataRateContext';

function DataRate({min, max}) {
    const { setDataRate } = useContext(DataRateContext);

    function handleDataRateChange(e) {
        if (e.target.value > max || e.target.value < min) return;
        setDataRate(e.target.value);
    }

    return (
        <>
            <label htmlFor="data-rate">
                Data Rate (ms) [{min}, {max}]:
                <br />
                Lower rate = More reactive shapes
                <br />
            </label>
            <input
                type="number"
                id="data-rate"
                name="data-rate"
                min={min}
                max={max}
                defaultValue="100"
                onChange={(e) => handleDataRateChange(e)}
            />
        </>
    );
}

export default DataRate;
