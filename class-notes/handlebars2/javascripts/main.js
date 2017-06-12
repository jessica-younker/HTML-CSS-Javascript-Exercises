"use strict";

console.log("hiyaii");

let Handlebars = require("hbsfy/runtime"),
	cakeInventory = require("./bakery.js"),
	cakeTemplate = require("../templates/cake-grid.hbs"),
	eventStuff = require("./events.js");

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

	function populatePage(inventoryStuff){
		//make a div to put the rendered html
		let newDiv = document.createElement("div");
		newDiv.innerHTML = cakeTemplate(inventoryStuff);
		$("#inventory-cards").append(newDiv);

		eventStuff();
	}


	cakeInventory.loadInventory()
	.then(
		function(inventoryFromLoadInventoryResolve){

			populatePage(inventoryFromLoadInventoryResolve);
			console.log("cakePromise", inventoryFromLoadInventoryResolve);
		},
		function (reason){
			console.log("something went really wrong.");
		});