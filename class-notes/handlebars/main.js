"use strict";
console.log("hoah");

let context = {"name": "Brenda",
				"occupation": "software developer",
				"language": "Handlebars"};

//first retrieve template data from html
let template = $('#handlebars-starter').html();

//then compile template into handlebar function (hb knows what compile is, 
// also capitalitalized HB is a big object provide by eponymous package)
let templateScript = Handlebars.compile(template);

//execute new script with our data as an argument
let html = templateScript(context);

//lastly, insert the html code into the page
$(document.body).append(html);


let lang_context = {"language": "handlebars",
					"adjective": "awesome"};

let tpl_language = $('#hbs-language').html();
let tpl_language_script = Handlebars.compile(tpl_language);
let html_language = tpl_language_script(lang_context);//can do (lang_context,context)
$(document.body).append(html_language);




let dev_content = {
	"occupation": "developer",
	"website": {
		"name": "Nashville Software School"
	},
	"names": [
		{"firstName" : "Brenda"},
		{"firstName" : "Gilbert"},
		{"firstName" : "Meg"}
	],
	"cities" : ["Nashville", "Franklin", "Green Hills"]
};

let tpl_devs = $("#hbs-devs").html();
let tpl_devs_script = Handlebars.compile(tpl_devs);
let html_devs = tpl_devs_script(dev_content);
$(document.body).append(html_devs);


var voter_context = {
	"person": [
		{"name": "John", "year": 1998},
		{"name": "Sue", "year": 1973},
		{"name": "Liz", "year": 2009}
	]
}

Handlebars.registerHelper("voterStatus", function(year){
	if (year > 1998){
		return " can not vote";
	} else {
		return "is a voter";
	}
});

Handlebars.registerHelper("increment", function(val){
	return parseInt(val + 1)
});

let tpl_voter = $("#hbs-voter").html();
let tpl_voter_script = Handlebars.compile(tpl_voter);
let html_voter = tpl_voter_script(voter_context);
$(document.body).append(html_voter)



