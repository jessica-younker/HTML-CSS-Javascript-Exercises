"use strict";

var app = angular.module("DoctorPatientApp", ["ngRoute"]);
    

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: "partials/doctors.html",
        controller: "LoadDataCtrl"
    }).
    when('/doctors.html', {
        templateUrl: "partials/doctors.html",
        controller: "LoadDataCtrl"
    }).
    when('/patients.html', {
        templateUrl: "partials/patients.html",
        controller: "LoadDataCtrl"
    }).
    otherwise('/');
});

// app.run(($location, FBCreds) => {
//     let creds = FBCreds;
//     let authConfig = {
//         apiKey: creds.apiKey,
//         authDomain: creds.authDomain,
//         databaseURL: creds.databaseURL
//     };

//     firebase.initializeApp(authConfig);
// });