import { useContext } from 'react';
import DataRateContext from '../../../../context/DataRateContext';

function DataRate() {
    const { setDataRate } = useContext(DataRateContext);

    function handleDataRateChange(e) {
        console.log(e.target.value);
        setDataRate(e.target.value);
    }

    return (
        <div>
            <label htmlFor="data-rate">Data Rate (ms) [1-1000]: </label>
            <input
                type="number"
                id="data-rate"
                name="data-rate"
                min="1"
                max="1000"
                defaultValue="100"
                onChange={(e) => handleDataRateChange(e)}
            />
        </div>
    );
}

export default DataRate;
