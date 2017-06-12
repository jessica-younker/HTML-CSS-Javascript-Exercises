"use strict";

let cardStyle = require("./cards.js");

var throwError = function () {
	window.alert("Please click on a card to begin editing");
};

function activateEvents(){
	$(".card-wrapper").click(cardStyle.highlightCard);
	$("#editInput").keyup(function(){
		let highlighted = document.getElementByClassName("is-clicked");
		if (highlighted.length === 0){
			//getelbyClass returns an array
			throwError();
		} else {
			cardStyle.editCard();
		}
	});
}

module.exports = activateEvents;