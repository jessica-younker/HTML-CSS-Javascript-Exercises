"use strict";
console.log("hello");

var CarLot = (function(){
	var inventory = [];

	return {
		loadInventory: function(onSuccessCallBack){
			var inventoryLoader = new XMLHttpRequest();
			
			inventoryLoader.addEventListener("load", function(){
				var carData = JSON.parse(event.target.responseText);
				inventory = carData.cars;
				onSuccessCallBack();
				console.log("inventory", inventory);
			});

			inventoryLoader.open("GET", "inventory.json");
			inventoryLoader.send();	//json request starts

			inventoryLoader.addEventListener("error", function(){
				alert("Load Failed");
			});
		},

		getInventory: function(showCards) {
			return inventory
		},	
	};

})();
