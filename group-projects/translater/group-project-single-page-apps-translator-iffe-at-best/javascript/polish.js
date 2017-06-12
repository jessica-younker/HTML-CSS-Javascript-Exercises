var Translate = (function (originalTranslate) {
    var polishTranslate = {
	  	merry: "wesołych", 
	  	christmas :"świąt",
	  	and: "i", 
	  	happy: "szczęśliwego", 
	  	new: "nowego",
	  	year: "roku"
    };

      	originalTranslate.translateToPolish = function(polishWord) {
      		return polishTranslate[polishWord];
    };
    return originalTranslate;
})(Translate);