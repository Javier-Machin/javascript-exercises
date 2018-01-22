var snakeCase = function(string) {
//deal with WTFcase
let resultString = string.replace(/\../g, " "); //specify that the dots are what we are looking for thanks to \

//deal with camelcase
if (resultString.indexOf(" ") < 0) {
	resultString = string.replace(/[A-Z]/g, " $&"); // $& here means that it should include whatever was captured in the regular expression search
}

return resultString
	.trim()
	.toLowerCase()
	.replace(/[^a-z -]/g, "") 
	.replace(/[ -]/g, "_"); // The empty space in both Regular expressions inside the replace methods is actually used as a character to search for
}

module.exports = snakeCase


// This worked up to last test

//	resultString = string.replace(/[-]/g, "_").replace(/[ ]/g, "_").replace(/[^A-Za-z_]/g, "");
//	resultString = resultString.split("");
//	for (let i = 0; i < resultString.length; i++) {
//		if (resultString[i] == resultString[i].toUpperCase() && resultString[i] != "_" && resultString[i-1] != "_" && i > 0) {
//		resultString[i-1] += "_";
//		}
//	}
//	resultString = resultString.join("").toLowerCase();
//	return resultString;

