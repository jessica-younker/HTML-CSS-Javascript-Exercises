"use strict";

app.controller("bookCtrl", function($scope, GuideBooks) {
  
  GuideBooks.getGuides()
  .then(function(guideDetails){
  		$scope.guides = guideDetails;
  });
  

  
});