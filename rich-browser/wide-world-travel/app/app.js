"use strict";

console.log("app.js here");

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.
    	when('/', {
	        templateUrl: "partials/guide-display.html",
	        controller: "bookCtrl"
	    }).
    	otherwise('/');
});
