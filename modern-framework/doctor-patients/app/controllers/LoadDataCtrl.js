"use strict";

app.controller("LoadDataCtrl", function($scope, HospitalFactory, $routeParams){
    HospitalFactory.getDoctorList()
    .then(function(doctorTypes){
        $scope.doctors = doctorTypes;
        $scope.firstname = "first name"; 
  });

    HospitalFactory.getPatientList()    
    .then(function(patientTypes){
        $scope.patients = patientTypes;
  });
	    
});