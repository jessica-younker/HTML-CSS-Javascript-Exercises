var sonnetParagraph = document.getElementById('sonnet').innerHTML;
console.log(sonnetParagraph);

//Finding the word orphans
var orphanSearch = sonnetParagraph.indexOf('orphans');
console.log('orphans position:', orphanSearch);  

//length of entire paragrah
var sample = sonnetParagraph.length;
console.log('sonnet length:',sample)

// Replace winter with yuletide
var winterReplaced = sonnetParagraph.replace('winter', 'yuletide');
console.log('winterReplaced:', winterReplaced);

// Replace occurances of the string "the" with "a large"
var replaceAll = sonnetParagraph.replace(/the /gi, 'a large ')
console.log('replaceAll:', replaceAll);

document.getElementById('sonnet').innerHTML = replaceAll;

//Set the content of the sonnet div with the new string

