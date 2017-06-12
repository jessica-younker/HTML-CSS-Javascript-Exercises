function toCelsius (userTemp) {
	return (userTemp - 32) * (5/9);
}

function toFahrenheit (userTemp) {
	return (userTemp) * 9/5 + 32;
}


var temperatureInput = document.getElementById("tempField");
var buttonSubmit = document.getElementById("converter");
var celsiusRadio = document.getElementById("celsiusRadio");
var outputElement = document.getElementById("output-target");
var buttonReset = document.getElementById("clear");

temperatureInput.addEventListener("keypress", pressed); 
//object passed to event handler w/ lots of info about what key? where click??? etc
buttonSubmit.addEventListener("click", determineConverter);
buttonReset.addEventListener("click", resetter);

function determineConverter() {
	var convertedTemperature;
	if (celsiusRadio.checked) {
		convertedTemperature = toCelsius(temperatureInput.value); 
		 //value gets value inside tempInput text box
	} else {
		convertedTemperature = toFahrenheit(temperatureInput.value); 
	}
	outputElement.innerHTML = convertedTemperature;
}

function resetter(click) {
	outputElement.innerHTML = "";
	temperatureInput.value = "";
	}

function pressed(enterPress) {
	if (enterPress.keyCode === 13){
		determineConverter();
	}
}

















