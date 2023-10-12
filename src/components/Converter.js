import React, { useState } from "react";
import Input from "./Input.js";
import Equal from "./Equal.js"

const conversions = {F : {C : (t) => fahrenheitToCelsius(t), 
                          K : (t) => fahrenheitToKelvin(t)},
                     C : {K : (t) => celsiusToKelvin(t), 
                          F : (t) => celsiusToFahrenheit(t)},
                     K : {F : (t) => kelvinToFahrenheit(t), 
                          C : (t) => kelvinToCelsius(t)}};

function kelvinToCelsius(temperature) {
    return temperature - 273.15;
}

function celsiusToKelvin(temperature) {
    return temperature + 273.15;
}

function celsiusToFahrenheit(temperature) {
    return temperature * 1.8 + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5 / 9.0;
}

function fahrenheitToKelvin(temperature) {
    return celsiusToKelvin(fahrenheitToCelsius(temperature));
}

function kelvinToFahrenheit(temperature) {
    return celsiusToFahrenheit(kelvinToCelsius(temperature));
}

function Converter(props) {
    const [temps, setTemps] = useState([{ value : "0", units : "F"}, 
                                        { value : "0", units : "F" }]);
    const handleInput = (event, index) => {
        const key = event.target.className;
        let newTemps = { ...temps }
        newTemps[index][key] = event.target.value;
        const toIndex = (index + 1) % 2;
        const toUnit = newTemps[toIndex].units;
        const fromUnit = newTemps[index].units;
        const fromTemp = parseFloat(newTemps[index].value);
        if (!Number.isNaN(fromTemp)) {
            if (fromUnit === toUnit) {
                newTemps[toIndex].value = newTemps[index].value;
            }
            else {
                newTemps[toIndex].value = conversions[fromUnit][toUnit](fromTemp).toFixed(2);
            }
        }
        setTemps(newTemps);
    }
    return (
        <>
            <div className="Converter">
                <Input key = "0" temp={temps[0]}
                        onInput = {(event) => handleInput(event, 0)}/>
                <Equal />
                <Input key = "1" temp={temps[1]} 
                        onInput = {(event) => handleInput(event, 1)}/>
            </div>
        </>
    );
}

export default Converter;