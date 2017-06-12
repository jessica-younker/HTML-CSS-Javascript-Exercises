"use-strict";

console.log("hello");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var donAmt = document.getElementById("amount");
var perLap = document.getElementById("per");
var donateButt = document.getElementById("donate");
var clearButt = document.getElementById("clear");
var table = document.getElementById("infoTable");

clearButt.addEventListener("click", clear);
donateButt.addEventListener("click", addInfo);


function clear(){
	firstName.value = "";
	lastName.value = "";
	perLap.checked = false;
	donAmt.value = '';
	console.log("firstName", firstName.value);
	console.log("lastName", lastName.value);
	console.log("lastName", donAmt.value);	
}

function addInfo(event){ 
	event.preventDefault();
	DonorInfo.addDonor({
		firstName: firstName.value,
		lastName: lastName.value,
		amount: donAmt.value,
		perlap: perLap.checked
	});
//can also have a separate variable that deines the object being passed in
	var donors = DonorInfo.getInfo();
	table.innerHTML = "";

	for (i = 0; i < donors.length; i++){
		table.innerHTML += `<tr><td>${donors[i].firstName}</td> <td>${donors[i].lastName}</td> <td>${donors[i].amount}</td> <td>${donors[i].perlap}</td></tr>`
	}
}
