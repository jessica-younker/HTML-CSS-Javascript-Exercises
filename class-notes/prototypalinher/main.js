"use strict";

console.log("hello from js");

var Order = function(){
	this.pizza = null;
	this.beverage = null;
};
//will be the root function in our prototype chain:
var Pizza = function() {
	this.orderType = "pizza";
	this.toppings = ["cheese"];
	this.crustThickness = 1;
};

Pizza.prototype.setCrustThickness = function(thickness) {
	this.crustThickness = this.crustThickness * thickness;
};

Pizza.prototype.setToppings = function(newToppings) {
	this.toppings = newToppings ? this.toppings.concat(newToppings) : this.toppings;
};

var DeepDish = function(toppings) {
	this.description = "yummy thick crust";
	this.setToppings(toppings);
	this.setCrustThickness(3);
};
//deepdish will inherit PIzza
DeepDish.prototype = new Pizza();

//beverage constructor
let Beverage = function() {
	this.price = 1.00;
	this.hasIce = true;
	this.size = "medium";
};

let Soda = function() {
	this.flavor = "cherry";
};

Soda.prototype = new Beverage();

var Tea = function() {
	this.sugar = true;
};

Tea.prototype = new Beverage();

let myDrink = new Tea();
//have to pass array
let myPizza = new DeepDish(["meatballs", "feta", "spinach"]);

let myOrder = new Order();
myOrder.pizza = myPizza;
myOrder.beverage = myDrink;

console.log("myOrder", myOrder);







