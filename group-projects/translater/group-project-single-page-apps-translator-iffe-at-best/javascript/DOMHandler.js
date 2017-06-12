// Variable that grabs the textarea element with the ID inputText
var inputText = document.getElementById("inputText");
//console.log('inputText', inputText);
// Variable to hold output text, default to input text
var finalOutputText;

// Variable to hold language that the user selects
var selectedLanguage;

// Get a reference to the <select> element that has all the language options
var languageChooser = document.getElementById("languageChooser");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the language from your augmented IIFE
*/
languageChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedLanguage = event.target; 
  
});

// Translate the text of the language choosen
var translateButton = document.getElementById("translate_button");
translateButton.addEventListener("click", displayTranslation);

function displayTranslation() {
    // console.log(inputText);

    var inputTextToArray = inputText.value.split(" ");
    var finishedTranslation = "";

    var outputDOM = document.getElementById("translated_text");

    for (var i = 0; i < inputTextToArray.length; i++) {

          finalOutputText = "";
         if (selectedLanguage.value === "danishTranslate"){
              finalOutputText = Translate.translateToDanish(inputTextToArray[i]);
              finalOutputText += " ";
         } else if (selectedLanguage.value === "polishTranslate"){
              finalOutputText = Translate.translateToPolish(inputTextToArray[i]);
              finalOutputText += " ";
          } else if (selectedLanguage.value === "esperantoTranslate"){
              finalOutputText = Translate.translateToEsperanto(inputTextToArray[i]);
              finalOutputText += " ";
          } else if (selectedLanguage.value === "germanTranslate"){
              finalOutputText = Translate.translateToGerman(inputTextToArray[i]);
              finalOutputText += " ";
         }

         finishedTranslation += finalOutputText;
    }

   outputDOM.innerHTML = finishedTranslation;
}


