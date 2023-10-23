import { useContext } from 'react';
import DataRateContext from '../../../../context/DataRateContext';

function DataRate() {
    const { setDataRate } = useContext(DataRateContext);

    function handleDataRateChange(e) {
        setDataRate(e.target.value);
    }

    return (
        <div>
            <label htmlFor="data-rate">
                Data Rate (ms) [1-400]:
                <br />
                Higher = Less Reactive Shapes
                <br />
            </label>
            <input
                type="number"
                id="data-rate"
                name="data-rate"
                min="1"
                max="400"
                defaultValue="100"
                onChange={(e) => handleDataRateChange(e)}
            />
        </div>
    );
}

export default DataRate;
