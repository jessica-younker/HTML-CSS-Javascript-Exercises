"use strict";

console.log("hello from challenge.js");

var FarmFoe = function() {	
};

/////
var Crop = function() {
	this.unique = "phermones";
};

Crop.prototype = new FarmFoe();

var cucumber = new Crop();
cucumber.healthRange = 20-40;
cucumber.damageRange = 15-80;
// cucumber.damageRange = Math.random() * (100 - 0) + 0;
var tomato = new Crop();
tomato.healthRange = 30-55;
tomato.damageRange = 9-50;

/////
var Insect = function() {
	this.unique = "creepyCrawly";
};

Insect.prototype = new FarmFoe();

var armyWorm = new Insect();
armyWorm.healthRange = 10-50;
armyWorm.damageRange = 19-50;

var cucBeetle = new Insect();
cucBeetle.healthRange = 6-25;
cucBeetle.damageRange = 1-100;

/////
var Fungus = function() {
	this.unique = "sporey";
};

Fungus.prototype = new FarmFoe();

var anthracnose = new Fungus();
anthracnose.healthRange = 1-90;
anthracnose.damageRange = 1-5;

var downyMildew = new Fungus();
downyMildew.healthRange = 6-25;
downyMildew.damageRange = 1-100;