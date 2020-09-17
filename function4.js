
const celsiusAndFahrenheit = function(temperature, unitType) {

    if (unitType === 'fahrenheit') {
        return((temperature - 32) / 1.8) + ' C';
    } else if (unitType === 'celsius') {
        return(temperature * 1.8 + 32) + ' F';
    }  
};

console.log(celsiusAndFahrenheit(5, 'fahrenheit'));
console.log(celsiusAndFahrenheit(32, 'celsius'));

