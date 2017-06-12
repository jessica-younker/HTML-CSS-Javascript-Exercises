"use strict";

app.factory("GuideBooks", ($q, $http) => {

	let getGuides = (wut) => {
	
	    return $q((resolve, reject) => {
			$http.get("data/guides.json")
	    	.then((stuff) => { 

	    	let guideBookList = stuff.data.guides;
	    	
	        resolve(guideBookList);
	        })
	        .catch((error) => {
	          reject(error);
	        });		
	    });	
  	};

	return {getGuides};

});

//scope only need when gluing controller to a particular view