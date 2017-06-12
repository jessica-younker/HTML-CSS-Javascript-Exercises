"use strict";

function outputTo(domElement, getMercuryTemplate){

	var mercuryInfo = {
		Name
		YearDiscovered
		Mass
		Size
		DistancefromSun
		AtmosphereComposition
		SatellitesProbesOrbiters

	};

	var mercuryTemplate = getMercuryTemplate(mercuryInfo);
	domElement.html(mercuryTemplate);

}