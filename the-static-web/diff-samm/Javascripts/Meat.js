"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
 	var ingredientPrices = {
  		"tofu": 1.00,
		"beanpatty": 1.05,
		"nomeat": 0,
		"rye": 0.80,
		"wheat": 0.75,
		"nobread": 0,
		"swiss": 0.50,
		"merican": 0.10,
		"nocheese": 0,
		"mustard": 0.5,
		"mayo": 0.5,
		"nocondi": 0,
		"arugula": .60,
		"lettuce": .20,
		"noveg": 0

	};
  	// Augment the original object with another method
  	maker.getIngredient = function(ingredients) {
      	console.log("inside the getIngredients!!")
      	console.log("ingredients", ingredients)
      	var totalPrice = 0;
      	for (i = 0; i < ingredients.length; i++) {
      		totalPrice += ingredientPrices[ingredients[i]];

      		console.log(ingredientPrices[ingredients[i]]);
      	}
      	console.log(totalPrice);  		
  	    return totalPrice;
    };
    // showPrice (totalPrice);
    // Return the new, augmented object with the new method on it
  	return maker;

})(SandwichMaker || {});


