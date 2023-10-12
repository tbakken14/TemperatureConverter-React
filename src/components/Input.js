function Input(props) {
    return (
        <>
            <input className="value" value={props.temp.value} 
                    type="text" required onInput={props.onInput}></input>
            <select name="units" className="units" value={props.temp.units} 
                    onInput={props.onInput}>
                <option value="F">Fahrenheit</option>
                <option value="C">Celsius</option>
                <option value="K">Kelvin</option>
            </select>
        </>
    );
}

export default Input;