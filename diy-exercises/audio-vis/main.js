var magicButton = document.getElementById("button-magic");
var image = document.getElementById("pic-area");
var audio = document.getElementById("sound-area")

magicButton.addEventListener("click", buttonClick);

function buttonClick(clickEvent) {
  	if (image.innerHTML === "") {
		image.innerHTML = '<img id="pic-area" height="100px" src="photo.JPG">';
	} else {
		image.innerHTML = "";
	}
  	audio.play();
  }




