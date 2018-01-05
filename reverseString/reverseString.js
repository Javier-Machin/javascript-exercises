var reverseString = function(string) {

	let stringReversed = "";

	for (i = string.length; i >= 0; i--) {
		stringReversed += string.substr(i, 1);
	}

	return stringReversed ;
}

module.exports = reverseString