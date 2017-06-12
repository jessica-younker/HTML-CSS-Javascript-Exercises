var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The stackLetter function should accept the array as the sole argument
function stackLetters (theAlphabetArray) {
		var stack = "   ";									//container/variable to hold what each loop return is
	for (var i = 0; i < theAlphabetArray.length; i++){
		if (i % 3 === 0  && i > 0){
			stack += " "  + theAlphabetArray[i];
			//could put console.log(stack) here instaead of the && i > 0 above to get correct alpha stack
		}else{
			stack += theAlphabetArray[i];
			console.log(stack);
			}
		}
	}
stackLetters(alphabet);


var coolArray = ["this", "is", "cool", "i", "love", "to", "code", "so", "much"];
function howdoesthiwork (anArray){
for(var i = 0; i < coolArray.length; 1++){
	if (i % 2 === 0){
		console.log("i % 2")
	}else {
		var num = 2;
	  	console.log("i !% 2")
	}
}


