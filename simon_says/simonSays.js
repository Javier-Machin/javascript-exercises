function echo(string) {
	return string;
}

function shout(string) {
	return string.toUpperCase();
}

function repeat(string, times) {	
	let returnString = string;
	if (times == undefined) {
		returnString = string + " " + string;
	} else {
		for (let i = 1; i < times; i++) {
			returnString += " " + string;
		}
	}
	return returnString;
}

function pieceOfWord(string, pieceLength) {
	return string.substr(0, pieceLength);
}

function firstWord(string) {
	return string.split(" ")[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(string) {
	let returnString = "";
	let convertedString = "";
	if (string.includes(" ")) {
		convertedString = string.split(" ");
		for (let i = 0; i < convertedString.length; i++) {
			if (i == 0 || convertedString[i].length > 4 || i == convertedString.length - 1) {
				returnString += capitalize(convertedString[i]) + " ";
			} else {
				returnString += convertedString[i] + " ";
			}
		}
		returnString = returnString.substr(0, (returnString.length - 1));
		return returnString;
	} else {
		return capitalize(string);
	}
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}