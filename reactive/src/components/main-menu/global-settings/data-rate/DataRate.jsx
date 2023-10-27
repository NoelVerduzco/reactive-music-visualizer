import { useContext } from 'react';
import DataRateContext from '../../../../context/DataRateContext';

function DataRate({ min, max }) {
    const { dataRate, setDataRate } = useContext(DataRateContext);

    function handleDataRateChange(e) {
        if (e.target.value > max || e.target.value < min) return;
        setDataRate(e.target.value);
    }

    return (
        <>
            <label htmlFor="data-rate">
                <h6>
                    Data Rate (ms) [{min}, {max}]:
                </h6>
                <h6>Lower rate = More reactive shapes</h6>
            </label>
            <input
                type="number"
                id="data-rate"
                name="data-rate"
                min={min}
                max={max}
                value={dataRate}
                defaultValue={dataRate}
                onChange={(e) => handleDataRateChange(e)}
            />
        </>
    );
}

export default DataRate;
