"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./firebaseConfig");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs(user) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://music-history-13942.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`//? indicates more to url. quotes indicate additional parameters to add
		}).done(function(songData){
			resolve(songData);
			//technically don't need a reject in here, can let it silently fail. 
			// because it's a promise, it will tell you /somehow/ that it is 
			// rejected--don't have to put in a return reject statement
		}).fail(function(error){
			reject(error);
		});
	});
}

function addSong(songFormObj) {
	console.log("addSong", songFormObj);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://music-history-13942.firebaseio.com/songs.json`,
			type: "POST",
			data: JSON.stringify(songFormObj),
			dataType: "json"
			//post is for adding item to database
		}).done(function(songId){
			resolve(songId);
		});
	});
}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteSong(songId) {
	console.log("deletesong func", songId);
	return new Promise(function(resolve, reject){
		$.ajax({
			//put specific song id into url
			url: `https://music-history-13942.firebaseio.com/songs/${songId}.json`,
			method: "DELETE"
		}).done(function(){
			resolve();
		});
	});
}

function getSong(songId) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://music-history-13942.firebaseio.com/songs/${songId}.json`
		}).done(function(songData){
			resolve(songData);
		}).fail(function(error){
			reject(error);
		});
	});
}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editSong(songFormObj, songId) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://music-history-13942.firebaseio.com/songs/${songId}.json`,
			type: "PUT", //also use PATCH which is for changing specific things
			data: JSON.stringify(songFormObj)
		}).done(function(data){
			resolve(data);
		});
	});
}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};
