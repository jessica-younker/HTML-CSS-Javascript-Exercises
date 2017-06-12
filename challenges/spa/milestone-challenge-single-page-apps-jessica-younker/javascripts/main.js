"use strict";

CarLot.loadInventory(populatePage);

function populatePage () {
	var inventory = CarLot.getInventory();
	// var area = document.getElementById("card-area");
	// var carCard;
	for (var i = 0; i < inventory.length; i++){
		let context = {
			"image": inventory[i].image,
			"make": inventory[i].make,
			"model": inventory[i].model,
			"year": inventory[i].year,
			"price": inventory[i].price,
			"description": inventory[i].description}
		
		let template = $('#hbs').html();
		let templateScript = Handlebars.compile(template);

		if (i % 3 === 0){	
			
			var row = $('<div class="row"></div>');
			$("#card-area").append(row);
		}  

		let html = templateScript(context);
		row.append(html);		
	}

	CarLot.activateEvents();
	CarLot.clearStyles();
};


