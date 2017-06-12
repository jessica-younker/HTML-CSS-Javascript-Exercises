"use-strict";
console.log("hello");

// This IIFE augments the original one
var DonorInfo = (function(infoTable) {
  	// The donor information should be stored as JS objects that contain their 
    // ontent type as keys and the submitted information as the value. 
    // {name: "John Donut", pledge: 70}
  	// Make sure the donor array cannot be accessed by the other modules 
    // except through an accessor (getter) method.

  var donorDeets = [];  		

  infoTable.addDonor = function(userInfo) {
    donorDeets.push(userInfo);
  }; 
	// Augment the original object with another method
  infoTable.getInfo = function() {
    return donorDeets;
  };

    // showPrice (totalPrice);
    // Return the new, augmented object with the new method on it
  return infoTable;

})(DonorInfo || {});


