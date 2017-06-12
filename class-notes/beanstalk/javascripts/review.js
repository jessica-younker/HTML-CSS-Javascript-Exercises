let howmanyBeans = 6;
let howmanyCows = 2;

$("#resultBtn").click( () => {  //adding event listener
	resultFunction(howmanyBeans, howmanyCows);
});

function resultFunction(a, b){
	let result = a * b;
	$("#result-1").html(result); //setting innerHTML with result
}


$("#scaryBtn").click( () => {
	$("dd").toggle();  //toggle's built in to hide/show
	console.log("ishidden", $("dd").is(":hidden"));
	$("dd").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Too Scary"); //tertiary something. if something is true..false
});

let storyItems = $(".story");  //grabs story by class, with #, grabs by id

for (let i = 0; i < storyItems.length; i++){
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
}

function over() {
	// console.log("over this.id", this.id, "event.current.target", event.currentTarget, "event.target", event.target);
	this.style.backgroundColor = "#cc0000";
}

function out() {
	this.style.backgroundColor = "#ffffff";
}

$(".inner").append(`, <strong>Chief</strong>`);
$("#holiday").click(  () => {
	doSomething($("#holiday"));
});

function doSomething(obj){
	console.log("this obj", obj, obj[0], event);
	//obj[0].style.backgroundColor = "orange";
	event.target.style.backgroundColor = "orange";
}