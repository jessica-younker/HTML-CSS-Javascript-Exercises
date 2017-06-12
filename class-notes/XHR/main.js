//asynchronous functions

var startTime = Date.now();
console.log("Date Begin:", startTime);

// for (var i = 0; i < 2000000; i++){
// 	//running a loop
// 	var x = i + 1/1 * 6 - 4;
// }
// console.log("I just looped ", i, " times");
// var nextTime = Date.now();
// console.log("Delay:", nextTime - startTime);

var dataRequest = new XMLHttpRequest();
//new means 'new instance of object'
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);
//also can do a progress event, abort, 

function dataRequestComplete(event) {
	console.log("The BIG transfer is complete and we have data");
	var dataDumpTime = Date.now();
	console.log("Date of dataDumpTime", dataDumpTime, "since beginning", dataDumpTime - startTime);
	var data = JSON.parse(event.target.responseText);
	//parse will put file in an array..or something readalbe (?)
	console.log("the BIG DATa:", data);
	console.log("how long to process:", Date.now() - startTime);
}

function dataRequestFailed(event){
	console.log("Oops, an error occurred while transferring the file");
}

dataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
//GET and PUT call files in http requests

dataRequest.send(); // add it to the event loop
//have to do open and then send

///////get the colors.json

var dataDataRequest2 = new XMLHttpRequest();
dataDataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataDataRequest2.addEventListener("error", dataRequestFailed);
 
function dataRequest2LoadComplete(event) {
	console.log("small data has loaded");
	var smallData = JSON.parse(event.target.responseText);
	console.log("smallData", smallData);
	showData(smallData);
};

function showData(itDontMatter){
	var colorDiv = document.getElementById("all-my-colors");

	for (whatever in itDontMatter) { //whatever and itdon'tmatter are just variables hanging onto values
		var colorData = ``;
		var colorItem = itDontMatter[whatever];

		colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`;

		colorDiv.innerHTML += colorData; 
	}

};

dataDataRequest2.open("GET", "color.json");
dataDataRequest2.send();

console.log("Date at end of page", Date.now());



































