console.log("hello");

var CarLot = (function(originalCarLot){

	var activeCard;
	var textInput = $(".form-control");

	originalCarLot.activateEvents = function(){
		$(".card").click(function() {
    		CarLot.clearStyles();
    		$(this).css("border", "dashed 10px black");
    		$(this).css("background-color", "yellow");
    		activeCard = $(this);
    		
    		textInput.val("");
    		textInput.focus();
    	});

		$(".submit").click(function(){
			console.log("butts", textInput.val());
			activeCard.find(".editMe").html(textInput.val());
	    });
	};

	originalCarLot.clearStyles = function(){
		$(".card").css("border", "solid 2px black");
		$(".card").css("background-color", "white");
	};


	return originalCarLot;
})(CarLot);

	
		