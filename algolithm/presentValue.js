/**
 * 関数
 * @param {number} pYen - Amount to look for present value
 * @param {number} pRate - Annual discount rate
 * @param {number} pYear - Operating year
 *
 * @return {number} present value
 */
var calcPresentValue = function(pYen, pRate, pYear) {

	var presentValue = 0;

	presentValue = pYen / Math.pow((1 + pRate/100), pYear);

	return presentValue;

}

// ex)
var pYen = 1000000; //(yen);
var pRate = 5; //(%)
var pYear = 2; //(year)
print(calcPresentValue(pYen,pRate,pYear));
