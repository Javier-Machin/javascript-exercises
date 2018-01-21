var palindromes = function(string) {
	returnString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
	return (returnString == returnString.split("").reverse().join(""));
}

module.exports = palindromes
