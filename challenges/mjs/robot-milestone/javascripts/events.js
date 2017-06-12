"use strict";

console.log("hello from events");

//dropdown menu. upon selection, second set of menus populates
$(".dropdown-menu li a").change(function() {
	console.log("in the click function");
	var selectedItem = $(this).text();
	console.log("this", selectedItem);
	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});



