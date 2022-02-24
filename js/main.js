//Write your pseduo code first!
//prompt for temp in celsius
//store value
//pass value to function
//function runs math to convert
//return new value onto screen

document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    const unitOfMeasurementFrom = document.querySelector('#unitOfMeasurementFrom').value
    const unitOfMeasurementTo = document.querySelector('#unitOfMeasurementTo').value
    const temperature = document.querySelector('#temp').value

    if (validationChecks(temperature, unitOfMeasurementFrom, unitOfMeasurementTo)) {
        setBackgroundImage(unitOfMeasurementTo);
        if (unitOfMeasurementFrom === "F") {
            convertFahrenheitToCelsius();
        } else {
            convertCelsiusToFahrenheit();
        }
    }
}

function validationChecks(temperature, unitOfMeasurementFrom, unitOfMeasurementTo) {
    if (temperature === "") {
        alert("You must enter a temperature value!")
        return;
    }
    if (unitOfMeasurementFrom === "none" || unitOfMeasurementTo === "none") {
        alert("You must make a selection for both units of measurement!")
        return;
    }

    if (unitOfMeasurementFrom === unitOfMeasurementTo) {
        alert("Really?!! You need different units in order to convert!")
        return;
    }
    return true;
}

function convertCelsiusToFahrenheit() {
    const temperature = document.querySelector('#temp').value
    let result = (temperature * 9/5) + 32;
    document.querySelector('#conversion').innerText = `${result}`
}

function convertFahrenheitToCelsius() {
    const temperature = document.querySelector('#temp').value
    let result = (temperature - 32) * 5/9;
    document.querySelector('#conversion').innerText = `${result}`
}

function setBackgroundImage(unitOfMeasurementTo) {
    let countriesUsingCelsiusImages = ["../img/Japan.jpg", "../img/national-flag-canada.jpg"]
    let countriesUsingFahrenheitImages = ["../img/flag-of-belize.jpg", "../img/usa-1645659327538-4524.jpg"]
    let index;
    let image;
    if (unitOfMeasurementTo === 'C') {
        index = Math.floor(Math.random() * countriesUsingCelsiusImages.length)
        image = countriesUsingCelsiusImages[index]
    } else {
        index = Math.floor(Math.random() * countriesUsingFahrenheitImages.length)
        image = countriesUsingFahrenheitImages[index]
    }
    document.body.style.background = `url(${image})`
}
