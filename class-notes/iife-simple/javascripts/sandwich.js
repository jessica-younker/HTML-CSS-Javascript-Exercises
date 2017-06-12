"use strict"; //or browser will yell at you/internet of things
//invoke function right away. Sandwich is invoked immediately w/ the () hanging out. capitlized variable is convention
var Sandwich = (function(){
	var prices = {
		"pb&j": 2.00,
		"cheese": 0.75,
	};

	var something = ["cheese", "meat", "potato"];
	return {
		getSandwichPrice: function(sandwichname){
			return prices[sandwichname];
			//object getSandwichPrice is being returned
			//Sandwich.getSandwichPrice("cheese")--consolelogs .75
		},
		getSandwichName: function(whichone){
			return something[whichone];
			//object getSandwichName is returned
		}
	};
})();

// // /following says "chicken or make me the chicken object" this way the order of your .js <scripts> doesn't matter. whoever loads first will be appended.
// }) (Chicken) || {});  //need on every page