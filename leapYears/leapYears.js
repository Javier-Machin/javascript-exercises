var leapYears = function(year) {
	let leap = false;

	if (year % 4 == 0) {
		leap = true;
	}

	if (year % 100 == 0 && year % 400 != 0) {
		leap = false;
	}

	return leap;
}

module.exports = leapYears


// var leapYears = function(year) {
// 		return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
// }

// module.exports = leapYears