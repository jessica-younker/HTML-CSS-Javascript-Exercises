"use-strict"

var createButton = document.getElementById("submit");
var checkboxes = document.getElementsByName("box");
var finalOutput = document.getElementById("finalSandwich");

var selectedIngredient; 

createButton.addEventListener("click", function(event) {
	var arrayPrices = [];
	for (var i = 0; i < checkboxes.length; i++) {
    	if (checkboxes[i].checked) {
	       	arrayPrices.push(checkboxes[i].id);
	    }
	};
    console.log(arrayPrices)
    SandwichMaker.getIngredient(arrayPrices);
	finalOutput.innerHTML = SandwichMaker.getIngredient(arrayPrices);	
});


// merge most of this into SandwichMaker.js so that this is just DOM stuff

