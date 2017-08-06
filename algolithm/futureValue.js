
/**
 * 関数
 * @param {number} pYen - Amount to look for future value
 * @param {number} pRate - Annual interest rate
 * @param {number} pYear - Operating year
 *
 * @return {number} future value
 */
var calcFutureValue = function(pYen, pRate, pYear) {
	
	var futureValue = 0;
	
	futureValue = pYen * Math.pow((1 + pRate/100), pYear);
	
	return futureValue;
	
}

// ex)
var pYen = 1000000; //(yen);
var pRate = 5; //(%)
var pYear = 2; //(year)
print(calcFutureValue(pYen,pRate,pYear));