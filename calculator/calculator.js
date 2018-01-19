function add (value1, value2) {
	return value1 + value2;
}

function subtract (value1, value2) {
	return value1 - value2;
}

function sum (array) {
	return array.reduce((sum, value) => sum += value,0);
}

function multiply (array) {
	return array.reduce((total, value) => total *= value,1);
}

function power(value1, value2) {
	let result = 1;
	for (let i = 0; i < value2;i++) {
		result *=  value1;
	}
	return result;
} //  return Math.pow(value1, value2)

function factorial(value) {
	if (value == 0) return 1;
	let factorialNums = [value];

	for (let i = value; i > 1; i--) {
		factorialNums.push(i - 1);
	}

	//let factorialResult = 1;
	
	//for (let i = 0; i < factorialNums.length; i++) {
	//	factorialResult *= factorialNums[i];
	//}

	return factorialNums.reduce((total,value) => total *= value);

	// alternative version

  //if (n == 0) return 0;
  //let product = 1;
  //for (let i = n; i > 0; i--) {
  //  product *= i;
  //}
  //return product;
  	


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}