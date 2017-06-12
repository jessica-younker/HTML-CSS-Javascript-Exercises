"use strict";

initializeData();


function initializeData(){
	var dataRequest = new XMLHttpRequest();

	dataRequest.addEventListener("load", dataRequestComplete);
	dataRequest.addEventListener("error", dataRequestFailed);

	dataRequest.open("GET", "songs.json");
	dataRequest.send();
}

function dataRequestComplete(event) {
	console.log("have songs data");

	var data = JSON.parse(event.target.responseText);

	console.log("the data:", data);
	showData(data.songs);
	deleteSong();
	loadMoreSongs();
}

function dataRequestFailed(event){
    console.log("Oops, an error occurred while transferring the file");
}

var songList = document.getElementById("finalList");

function showData(songs){
  for (var i = 0; i < songs.length; i++){
    songList.innerHTML += `<div><h5>${songs[i].Title}: ${songs[i].Artist} from the album ${songs[i].Album}
    <button type="button" class="deleteButton">Delete Song</button></h5></div>`;
  }
}

function deleteSong(){
	$(".deleteButton").click(function(event){
	    event.preventDefault();
	    $(event.target).parent().remove();
	});
}


function loadMoreSongs(){
	$("#more").click(function(event){
		console.log("clicked");
		var dataDataRequest2 = new XMLHttpRequest();
		dataDataRequest2.addEventListener("load", dataRequestComplete);
		dataDataRequest2.addEventListener("error", dataRequestFailed);
		
		dataDataRequest2.open("GET", "songs2.json");
		dataDataRequest2.send();
	});

		
}


