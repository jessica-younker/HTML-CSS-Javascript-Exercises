function coinCounter (dollarAmount) {
    var coinPurse = {};
    
    dollarAmount = dollarAmount * 100;
    coinPurse.quarters = Math.floor(dollarAmount /25);
    var theRest = dollarAmount - (coinPurse.quarters * 25);
    coinPurse.dimes = Math.floor(theRest / 10);
    theRest = theRest - (coinPurse.dimes * 10);
    coinPurse.nickels = Math.floor(theRest / 5);
    coinPurse.pennies = theRest - (coinPurse.nickels * 5);

    return coinPurse;
}

console.log(coinCounter(1.67));


