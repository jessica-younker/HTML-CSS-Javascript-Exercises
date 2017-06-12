"use strict";

console.log("Sandwich", Sandwich);

var sandwichCost = Sandwich.getSandwichPrice("pb&j");
console.log("sandwichCost", sandwichCost);

var toppingCost = Sandwich.getToppingPrice("captainCrunch");
//to get multiple toppings: instead of string for captaincrunch, do var = [my topping list], then write a loop for multiple toppings, then pass back value

var output = document.getElementById("sandwich");

output.innerHTML = `<h2>Your sandwich cost: $ ${(sandwichCost + toppingCost).toFixed(2)}</h2>`;
//$ steps you out of the literal

//variables in each function are private to that function. getToppings, setToppings
var obj = {mustard: .50};
Sandwich.setTopping(obj);