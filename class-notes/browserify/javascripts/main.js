"use strict";

console.log("hello browserify JS");

// let test = require('./test.js');
// console.log("test", test);
// console.log("test.happy", test.getHappy()); //referencing 
// object of functions in test.js

let MathModule = require("./math.js");

console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5)); //returns 8 in console


// browserify is only paying attention to main.js as per the 
// gruntfile, so all objects/functions need to refer back to this file
// dont have to run other js files in index. browserify works like chain 
// reaction off of what main specifies
// require looks at that file for the exports