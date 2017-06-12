var Translate = (function (originalTranslate) {
  var esperantoTranslate = {
    merry: "gaja",
    christmas: "christmas",
    and: "kaj",
    happy: "feliĉa",
    new: "novaj",
    year: "jaro"
  };

      originalTranslate.translateToEsperanto = function(esperantoWord) {
        return esperantoTranslate[esperantoWord];
    }
    return originalTranslate;

})(Translate);