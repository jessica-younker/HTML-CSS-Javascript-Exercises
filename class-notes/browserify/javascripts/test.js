"use strict";

console.log("hello test JS");

let happy = true;
function getHappy(){
	return happy;
}

module.exports = {getHappy}; //list out functions that i want to be exported 
// in this object..don't need iffe anymore. happy is private to this module..must call getHappy to access it. test.js is inside get happy
//don't need curly brackets around getHappy because just one function, not {function1, function2, etc}