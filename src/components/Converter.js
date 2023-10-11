import Input from "./Input.js";
import Equal from "./Equal.js"

function handleInput() {
    console.log("hey")
}

function Converter() {
    return (
        <>
            <div className="Converter">
                <Input onInput = {() => handleInput()} defaultUnit="F"/>
                <Equal />
                <Input defaultUnit="C"/>
            </div>
        </>
    );
}

export default Converter;