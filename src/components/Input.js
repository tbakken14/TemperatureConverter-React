function Input(props) {
    return (
        <>
            <input type="text" required onInput={props.onInput}></input>
            <select name="units" id="units" defaultValue={props.defaultUnit} onInput={props.onInput}>
                <option value="F">Fahrenheit</option>
                <option value="C">Celsius</option>
                <option value="K">Kelvin</option>
            </select>
        </>
    );
}

export default Input;