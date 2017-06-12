var younkyPoint = document.getElementById("younky");
var willPoint = document.getElementById("will");
var younkyOutput = document.getElementById("younky-output");
var willOutput = document.getElementById("will-output");
var winnerOutput = document.getElementById("winner-output");
var winnerButton = document.getElementById("winner");

var yPoints = 0;
var wPoints =0;

younkyPoint.addEventListener("click", younkyClick);
willPoint.addEventListener("click", willClick);
winnerButton.addEventListener("click", winnerClick);

function younkyClick(clickEvent) {
	yPoints += 2;
	younkyOutput.innerHTML = yPoints;
	winnerClick(clickEvent);
}

function willClick(clickEvent) {
	wPoints += 1;
	willOutput.innerHTML = wPoints;
	winnerClick(clickEvent);
}

function winnerClick(clickEvent) {
	if (yPoints > wPoints) {
		winnerOutput.innerHTML = "Younky is the winner";
	} else if (wPoints > yPoints) {
			winnerOutput.innerHTML = "The rules have changed, and Younky is still the winner";
		} else if (wPoints === yPoints) {
				winnerOutput.innerHTML = "Will is a copycat and therefore disqualified";
		}
}








