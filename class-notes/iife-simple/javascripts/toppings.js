"use strict";

var Sandwich = (function(originalSandwich){
// even though Sandwich is already definted in other tab, can append it here by invoking Sandiwch in those outhanging ()
	var toppingPrices = {
		whippedCream: 0.50,
		mayo: 0.25,
		captainCrunch: 0.10,
		bacon: 1.00
//can put prices in quotes or not...have to do [pb&j] when calling it cuz of the &
	};

	originalSandwich.getToppingPrice = function(topping){
		return toppingPrices[topping];

	};

	originalSandwich.setTopping = function(obj){
		console.log("obj", obj);
		toppingPrices[Object.keys(obj)] = Object.values(obj)[0];
		//square brackets force evaluation of contents
		console.log("show me the toppings", toppingPrices);

	};

	return originalSandwich;


})(Sandwich);