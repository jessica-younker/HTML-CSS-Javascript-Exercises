var Translate = (function () {
	var danishTranslate = {
	    merry: "lystig",
		christmas: "jul",
		and: "og",
		happy: "lykkelig",
		new: "ny",
		year: "år"
	};

	return {
		translateToDanish: function(danishWord) {
			return danishTranslate[danishWord];
		}
	};
})();









   