"use strict";

var app = angular.module("MushApp", ["ngRoute"]);

 
app.config(function($routeProvider){
    $routeProvider.
    	when('/', {
	        templateUrl: "partials/mush-list.html",
	        controller: "MushCtrl"
	    }).
    	otherwise('/');
});
