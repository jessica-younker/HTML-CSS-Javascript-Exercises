"use strict";
//object create business
// function SuperHuman (name, superpower) {
// 	this.name = name;
// 	this.superpower = superpower;
// };

// SuperHuman.prototype.usePower = function() {
// 	console.log(this.superpower + "!");
// };

// var banshee = new SuperHuman("Silver Banshee", "sonic wail");

// banshee.usePower();

var SuperHuman = {
	usePower: function() {
		console.log(this.superpower + "!");
	}
};

var banshee = Object.create(SuperHuman, {
	name: {value: "Silver Banshee"},
	superpower: {value: "sonic wall"}
});
//data descriptors: writable, configurable, enumerable, value
//accessor descriptors: get(), set(newValue)
banshee.usePower();