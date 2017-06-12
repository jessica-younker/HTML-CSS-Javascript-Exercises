"use strict";

var textInput = document.getElementById("textarea");
var create = document.getElementById("create")
	.addEventListener("click", newCard);
var cardArea = document.getElementById("card-area");

function newCard(event){
	var newCard = "<article class='card'><h3 class='text'>" 
	+ textInput.value +"</h3><button type='button' class='deleteButton'>Delete Card</button></article>";
	cardArea.innerHTML += newCard;

	var deleteButton = document.getElementsByClassName("deleteButton");
	for (var i = 0; i < deleteButton.length; i++) {
		deleteButton.item(i).addEventListener("click", deleteCard);	
	};
	textInput.value = ""; //reset textarea
};

function deleteCard (event) {
	this.parentElement.remove();
};