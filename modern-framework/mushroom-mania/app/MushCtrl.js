"use strict";

app.controller("MushCtrl", function($scope, $q, $http, FBCreds) {

// function MushCtrl($scope) {
//     $scope.value= "true";
    
//     $scope.$watch('value', function(value) {
//        console.log(value);

  let getMushrooms = () => {
	    
    return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/mushrooms.json`)
    		.then((mushrooms) => { 

    			let shrooms = mushrooms.data;
          let newArray = [];
          let species;
          
          for (var i = 0; i < shrooms.length; i++) {
            let newObj = {};
            newObj.name = Object.keys(shrooms[i])[0];
            newObj.edible = shrooms[i][newObj.name].edible;
            newObj.description = shrooms[i][newObj.name].description;
            
            newArray.push(newObj);
          }
          $scope.mushrooms = newArray;
          console.log("bbbb", newArray);
          resolve(mushrooms);
        })
        .catch((error) => {
          reject(error);
        });		
    });	
  };
  getMushrooms();
  
});
