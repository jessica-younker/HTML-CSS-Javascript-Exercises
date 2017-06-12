"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    templates = require("./dom-builder"),
    user = require("./user");

user.logOut();


// Using the REST API
function loadSongsToDOM() {
  console.log("Need to load some songs, Buddy");
  let currentUser = user.getUser();
  db.getSongs(currentUser)
  .then(function(songData){
    console.log("got data", songData);
    var idArray = Object.keys(songData);
    idArray.forEach(function(key){
      songData[key].id = key;
    });
    console.log("song object with id", songData);
    templates.makeSongList(songData);

  });
}
loadSongsToDOM(); //<--Move to auth section after adding login btn

// Send newSong data to db then reload DOM with updated song data
$(document).on("click", ".save_new_btn", function() {
  console.log("click save new song");
  let songObj = buildSongObj();
  db.addSong(songObj)
  .then(function(songId){
    loadSongsToDOM();
  });

});

// go get the song from database and then populate the form for editing.
$(document).on("click", ".edit-btn", function () {
  console.log("click edit song button");
  let songId = $(this).data("edit-id");
  db.getSong(songId)
  .then(function(song){
    return templates.songForm(song,songId);
  })
  .then(function(finishedForm){
    $(".uiContainer--wrapper").html(finishedForm);
  });
});

//Save edited song to FB then reload DOM with updated song data
$(document).on("click", ".save_edit_btn", function() {
  let songObj = buildSongObj();
  let songId = $(this).attr("id");
  db.editSong(songObj,songId)
  .then(function(data){
    loadSongsToDOM();
  });
});

// Remove song then reload the DOM w/out new song
$(document).on("click", ".delete-btn", function () {
  console.log("clicked the delete song", $(this).data("delete-id"));
  let songId = $(this).data("delete-id");
  db.deleteSong(songId)
  .then(function(){
    loadSongsToDOM();
  });
});

$("view-songs").click(function(){
  $(".uiContainer--wrapper").html("");
  loadSongsToDOM();
});

$("#auth-btn").click(function(){
  console.log("clicked auth");
  user.logInGoogle()
  .then(function(result){
    console.log("result from login", result.user.uid);
    user.setUser(result.user.uid);
    $("#auth-btn").addClass("is-hidden");
    $("#logout").removeClass("is-hidden");
    loadSongsToDOM();
  });
});

// Helper functions for forms stuff. Nothing related to Firebase
// Build a song obj from form data.
function buildSongObj() {
    let songObj = {
    title: $("#form--title").val(),
    artist: $("#form--artist").val(),
    album: $("#form--album").val(),
    year: $("#form--year").val(),
    uid: user.getUser()
  };
  return songObj;
}

// Load the new song form
$("#add-song").click(function() {
  console.log("clicked add song");
  var songForm = templates.songForm()
  .then(function(songForm) {
    $(".uiContainer--wrapper").html(songForm);
  });
});
