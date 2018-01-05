var sumAll = function(num1, num2) {
	let sumAllResult = 0;
	let smallerNumber = num1;
	let greaterNumber = num2;
	if (num1 >= 0 && num2 >= 0 && typeof num1 == "number" && typeof num2 == "number") {
		if (num1 > num2) {
			smallerNumber = num2;
			greaterNumber = num1;
		}
	} else {return "ERROR";}

	for (let i = smallerNumber; i <= greaterNumber; i++) {
		sumAllResult += i;
	}
	return sumAllResult;
}

module.exports = sumAll
