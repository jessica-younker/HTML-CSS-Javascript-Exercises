"use strict";

console.log("main here");

var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");  
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

homeLink.addEventListener("click", function(event) {
 	event.preventDefault();
 	listView.classList.add("hidden");
  addView.classList.add("hidden");

  homeView.classList.add("visible");
  homeView.classList.remove("hidden");
});

listLink.addEventListener("click", function(event) {
  event.preventDefault();
	homeView.classList.add("visible");
 	addView.classList.add("hidden");

	listView.classList.add("visible");
 	listView.classList.remove("hidden");
 }); 
//   songsText.innerHTML = "";
//   for (var i = 0; i < correctedSongs.length; i++) {
//     songsText.innerHTML += `<p>${correctedSongs[i]}</p><br>`;
// }});

// addLink.addEventListener("click", function(event) {
// 	event.preventDefault();
//   homeView.classList.add("visible");
//   listView.classList.add("hidden");

//  	addView.classList.add("visible");
//  	addView.classList.remove("hidden");
// });

// var songInput = document.getElementById("songName");
// var artistInput = document.getElementById("songArtist");
// var albumInput = document.getElementById("songAlbum");

// addButton = document.getElementById("add");
// addButton.addEventListener("click", function(event){

//   correctedSongs.push(`${songInput.value} - by  ${artistInput.value} on the album ${albumInput.value}`);
//     songInput.value = "";
//     artistInput.value = "";
//     albumInput.value = "";

  //   var deleteButt = document.getElementById("deleteRow");
  // for (var i = 0; i < deleteButton.length; i++) {
  //   deleteButton.item(i).addEventListener("click", deleteCard); 
  // };
// });

























