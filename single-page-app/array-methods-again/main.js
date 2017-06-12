var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

colors.forEach(function(item, index){ 
//forEach paramater has set posish: first position is item from array, second is index value--can call potato, thrid parameter is the array
	var newColorString = "I like this color " + item;
	console.log("newColorString", index, newColorString);
});
// foreach is equivalent to a forloop for interating over items
//this is the same as the function above:
for (var i = 0; i < colors.length; i++){
};

var reversedColors = colors.map(function(color){ 

//original array is preserved
	console.log("split", color.split(""));
	return color.split("").reverse().join("");
})
console.log("reversedColors", reversedColors);

//same as following:
var reversedColors = [];
for (var i = 0; i < colors.length; i ++) {
	var reversed = colors[i].split("").reverse().join("")
	reversedColors.push(reversed);
}


//filter method can poplate a new array from an existing

var fourLetters = colors.filter(function(color){
	return color.length === 4;
});
console.log("fourLetters", fourLetters);

//same
var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
	if (colors[i].length === 4) {
		fourLetters.push(colors[i]);
	}
}



var numbers = [51, 10, 62, 4, 13, 9];

var sum = numbers.reduce(function(prev, curr){
	console.log("prev:", prev, "curr:", curr)
	return prev + curr;
});
console.log("sum", sum);

//same as:
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
/* sort numbers in descending order
remove any integers greater than 19
multiply each remaining number by 1.5 and then subtract 1
then output (console) sum of all the resulting numbers */

//Chaining example
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var chainingResult = integers
.sort(function(a,b){return a - b})
//this is the compareFunction structure: prevents sorter form thinking 100 is less than 20 (bc 1 comes before 2)
.reverse
//can stick that there bc no semicolon
.filter(function(num)){return num < 19}
.map(function(num){retun (num * 1.5) -1})
//using map to perform instructions on our data
.reduce(function(prev, curr){return prev + curr});

console.log("chainingResult", chainingResult);




























