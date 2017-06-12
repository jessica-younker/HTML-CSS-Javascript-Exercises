var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeCount = {
	A: 0,
	B: 0,
	C: 0,
	D: 0,
	F: 0
};

var totalA = document.getElementById("As");
var totalB = document.getElementById("Bs");
var totalC = document.getElementById("Cs");
var totalD = document.getElementById("Ds");
var totalF = document.getElementById("Fs");
var highGrade = document.getElementById("highest-grade");
var lowGrade = document.getElementById("lowest-grade");


function grader(percentScore) {
	if (percentScore < 100 && percentScore > 90) {
		return "A";
	}
	if (percentScore < 91 && percentScore > 80) {
		return "B";
	}
	if (percentScore < 81 && percentScore > 70) {
		return "C";
	}
	if (percentScore < 71 && percentScore > 60) {
		return "D";
	}
	if (percentScore < 60) {
		return "F";
	}

}

for (var i = 0; i < scores.length; i ++) {
	var grade = grader(scores[i])	

	gradeCount[grade] += 1;		
					//gradecount sees grade string but knows to put it in corresponding object object	
}
 
 totalA.innerHTML = gradeCount.A;
 totalB.innerHTML = gradeCount.B;
 totalC.innerHTML = gradeCount.C;
 totalD.innerHTML = gradeCount.D;
 totalF.innerHTML = gradeCount.F;

highGrade.innerHTML = Math.max.apply(null, scores);
lowGrade.innerHTML = Math.min.apply(null, scores);
console.log(gradeCount)

	



