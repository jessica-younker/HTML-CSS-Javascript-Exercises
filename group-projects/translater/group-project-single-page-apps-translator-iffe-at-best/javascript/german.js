var Translate = (function (originalTranslate) {
	var germanTranslate = {
	  	merry: "froliche", 
	  	christmas: "Weihnachten", 
	  	and: "und", 
	  	happy: "frohes", 
	  	new: "neu", 
	  	year: "Jahr"
	};

		originalTranslate.translateToGerman = function(germanWord) {
			return germanTranslate[germanWord];
		};
		return originalTranslate;
})(Translate);
