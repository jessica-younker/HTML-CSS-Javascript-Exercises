"use strict";

let bakery = {};

bakery.loadInventory = function(){
	return new Promise( function(resolve, reject){
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);
			resolve(data);
		});
	});
};



module.exports = bakery;