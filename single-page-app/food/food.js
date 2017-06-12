"use strict";

var startTime = Date.now();
console.log("Date Begin:", startTime);

var dataRequest = new XMLHttpRequest();
//new means 'new instance of object'
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);
//also can do a progress event, abort, 
var petFoodDiv = document.getElementById("petfood-list");

function dataRequestComplete(event) {
	console.log("dogfood transfer is complete and we have data");
	var dataDumpTime = Date.now();
	console.log("Date of dataDumpTime", dataDumpTime, "since beginning", dataDumpTime - startTime);
	var data = JSON.parse(event.target.responseText);
	//parse will put file in an array..or something readalbe (?)
	// console.log("the BIG DATa:", data.dog_brands);
	// console.log("how long to process:", Date.now() - startTime);
	showData(data.dog_brands);
	
};

function dataRequestFailed(event){
	console.log("Oops, an error occurred while transferring the file");
};

dataRequest.open("GET", "petfood.json");
//GET and PUT call files in http requests
dataRequest.send(); // add it to the event loop
//have to do open and then send

function showData(petfood){
	console.log("petfood", petfood);

	for (var i = 0; i < petfood.length; i++){
		petFoodDiv.innerHTML += `<div><h2>${petfood[i].name}</h2></div>`;
		for (var j = 0; j < petfood[i].types.length; j++){
			petFoodDiv.innerHTML += `<div><h3>${petfood[i].types[j].type}</h3></div>`;
			for (var k = 0; k < petfood[i].types[j].volumes.length; k++){
				petFoodDiv.innerHTML += `<div>${petfood[i].types[j].volumes[k].name}</div>
										<div>${petfood[i].types[j].volumes[k].price}</div>`;
			}
		}
	}
};

var dataDataRequest2 = new XMLHttpRequest();
dataDataRequest2.addEventListener("load", dataRequest2LoadComplete);
dataDataRequest2.addEventListener("error", dataRequestFailed);
 
function dataRequest2LoadComplete(event) {
	console.log("catfood has loaded");
	var catFoodData = JSON.parse(event.target.responseText);
	showData(catFoodData.cat_brands);
};

dataDataRequest2.open("GET", "catfood.json");
dataDataRequest2.send();

catFoodDiv = document.getElementById("catfood-list");

function showCata(catfood){
	console.log("catfood", catfood);
	for (var i = 0; i < catfood.length; i++){
		catFoodDiv.innerHTML += `<div><h2>${catfood[i].name}</h2></div>`;
		console.log("what is going on", catfood[i].name);
		for (var j = 0; j < catfood[i].breeds.length; j++){
			catFoodDiv.innerHTML += `<div><h3>${catfood[i].breeds[j].breed}</h3></div>`;
			console.log("i don't know what", catfood[i].breeds[j].breed);
			for (var k = 0; k < catfood[i].breeds[j].types[k].length; k++){
				catFoodDiv.innerHTML += `<div><h3>${catfood[i].breeds[j].types[k].breed}</h3></div>`;
								
			}
			console.log("breed", catfood[i].breeds[j].types[k]);
			console.log("type", catfood[i].breeds[j].types[k].type);
		}
	}

}






























