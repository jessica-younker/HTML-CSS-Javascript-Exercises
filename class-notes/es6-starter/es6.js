"use strict";
// https://github.com/brendalong/es6-starter
// let and const

function func1() {
	if (true) {
		let tmp = 123;

	}
	console.log("func1 tmp", tmp); //tmp only available inside block bc it's a let
}
//in contrast, var-declared variables are function-scoped
function func2(){
	if (true) {
		var tmp = 123;
	}
	console.log("func2 tmp", tmp); //123


function func3(){
	var foo = 5;
	if (true){
		var foo = 10; //if this var were let, function would yield '5' because the let is only available w/in that function block
	}
	conosle.log("func3 with var", foo);
}
func3();

function func4(){
	let foo;
	console.log("empty foo", foo, typeof foo);

	if (true){
		foo = 10;
		console.log("foo inside the if", foo);
	}
	conosle.log("func4 with var", typeof foo);
}
func4();

// let foo.... foo = reassigning

// let foo... let foo = reinstantiating 


function func5(){
	for (var i = 0; i < 10; i++){ //could ues let here
		//do some stuff
	}
	//want something based i
	console.log("the total number of products", i);
}


//block-scoped and cannot change/reassigned
const MY_FAVORITE_NUMBER = 3;
MY_FAVORITE_NUMBER = 12; //can't reassign const variable


var reflect = function(value) {
    return value;
};
console.log("reflect in ES5: ", reflect("ES5 is so yesterday.") );

// syntax at 60 is effectively equivalent to:
var reflect = value => value;
// console.log("reflect in ES6: ", reflect("ES6 is the new hotness.") );
//meg likes fat arrow usage for anonymous functions

//a function without arguments
var sum = function() {
    return 1 + 2;
};
// console.log("previous without arguments", sum());

// // Without args, you need an empty parens
var sum = () => 1 + 2;
// console.log("I'm sum pretty", sum());

















