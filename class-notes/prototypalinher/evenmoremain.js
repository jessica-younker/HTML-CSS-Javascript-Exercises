"use strict"

var Car5 = Object.create(null); //this is an empty object, like {}
Car5.prototype = {
  getInfo: function() {
    return 'A ' + this.color + ' ' + this.desc + '.';
  }
};
 
var car2 = Object.create(Car5.prototype, {
  //value properties
  color:   { writable: true,  configurable:true, value: 'red' },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function ()      { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
}); 
car2.color = 'blue';
console.log(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'



// The Object.create() method can just as adeptly create our Car object. 
// It accepts either one or two properties as follows:
// Object.create(proto [, propertiesObject ])
// The first argument is the prototype to extend. 
// If you aren't subclassing another object then you must pass a null value 
// to the function. The second optional argument is an object containing 
// the object's property descriptors.


// each property has a descriptor
// Data Descriptors or Accessor Descriptors.

// Data Descriptors
// writable: Whether the concrete value of the property may be changed. Only applies to data descriptors.
// configurable: Whether the type of descriptor may be changed, or if the property can be removed.
// enumerable: Whether the property is listed in a loop through the properties of the object.
// value: The value of a property. This property only applies to Data descriptors because they reference concrete values, so the value describes the concrete data bound to the property.

//Accessor Descriptors
// Accessor descriptors, on the other hand, proxy access to the concrete value through getter and setter functions. These are useful when some type of transformation or constraints are required. When not set, they'll default to undefined.
// get (): A function called with no arguments when the property value is requested using dot notation (i,e: obj.prop).
// set (newValue): A function called with the new value for the property when the user tries to modify the value of the property using dot notation (i,e: obj.prop = 'new value').