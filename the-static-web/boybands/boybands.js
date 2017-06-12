var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var currentBand = "";
var currentVeggie = "";

var bandElement = document.getElementById("boy-bands");

for (var i = 0; i < bands.length; i++){
	currentBand = bands[i];
	bandElement.innerHTML = bandElement.innerHTML + currentBand + "<br>";
}

var vegElement = document.getElementById("vegetables");

for (var i = 0; i < vegetables.length; i++){
	currentVeggie = vegetables[i];
	vegElement.innerHTML = vegElement.innerHTML + currentVeggie + "<br>"
}

for (var i = 0; i < 5; i++){
	currentBand = bands[i];
	currentVeggie = vegetables[i];
	bandElement.innerHTML = bandElement.innerHTML + currentBand + "<br>";
	vegElement.innerHTML = vegElement.innerHTML + currentVeggie + "<br>"
}



// function appendText(element, text) {
//  element.innerHTML = element.innerHTML + text + '<br>';
// }

// for (var i = 0; i < bands.length; i++) {
//  appendText(bandElement, bands[i]);
//  appendText(veggieElement, vegetables[i]);
// }