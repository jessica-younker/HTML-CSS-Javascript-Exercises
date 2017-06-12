"use strict";

console.log("hiya");

$(document).ready(function () {
	/* all the jquery code goes here */

//jQ always returns an array of elements, even when there's only one
////select by ID/////
//vanilla
var topArticle = document.getElementById("top-article");
//jquery - # tells it to get id
var article = $("#top-article");

console.log("topArticle", topArticle);
console.log("article", article[0]);	
});
////select by tag name////

var allButtons = document.getElementsByTagName("button");
console.log("allButtons by TagName", allButtons);
//remember this returns an array
var button = $("button");
console.log("button", button, button.html());


/////get element by class//////
var mainArticles = document.getElementsByClassName("article--main");
console.log("mainArticles", mainArticles);
//first place in each statement is index value no matter what it's called
$(".article--main").each(function(arrayIndex, currentElement){
console.log(arrayIndex,$(currentElement).html());

});

///select by attribute////
var umbrellaElement = $("h1[umbrella='open']");
console.log("umbrella text: ", umbrellaElement.html());


//select children///
console.log("all children: ", $(".container").children()); //there are 2 children

//select specific children//
console.log("the h1: ", $(".container").children("h1"));
console.log("the section: ", $(".container").children("section"));

//select specific child index (useful for ul/ol)??
//example of chianing selectors

console.log("third li: ", $("#letters").children(".letter").eq(3).html());
//number in perns is index

//finding parent DOM elements
console.log("finding parents DOM element", $(".album").parents(".song-container").attr("index"));

/////finding an element//////
var album = $(".container").find(".album");
console.log("album", album.html());

function functionIWantjQueryToExecute(songList) {
      console.log(songList.songs);

      for (var i = 0; i < songList.songs.length; i++) {
        var currentSong = songList.songs[i];
        $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
        $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
        $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
      }
//as a test, what happens if a really big file....who comes first?
//test after others

//FIRST THIS AJAX IS CALLED; THEN THE SECOND ONE. THE SECOND ONE MAY FINSIH LOADING BEFORE THE FIRST
$.ajax({
	url:"JEOPARDY_QUESTSIONS.json"
}).done(functionIWantjQueryToExecute);


//how jquery handles loading data
$.ajax({
	url:"javascripts/songs.json"
}).done(functionIWantjQueryToExecute);
}














