var caesar = function(stringtarget, shift) {
	let charCodeList = [];
	let encriptedString = "";
	let isLetter = RegExp("[A-Za-z]");

	for (let i = 0; i < stringtarget.length; i++) { // Iterates every character in the string
		
		let currentCharacter = stringtarget.charAt(i);
		let currentCharCode = stringtarget.charCodeAt(i);

		if (isLetter.test(currentCharacter)) { // Uses a regular expression search to check if its a character we want to shift
			charCodeList[i] = currentCharCode + shift; // Uses shift value to shift forward in the charcodes
			if (currentCharCode >= 97 && currentCharCode <= 122 && (currentCharCode + shift) > 122) { // If it shifts beyond the charcodes that belong to letters
				let shiftsOverLimit = (currentCharCode + shift) - 122; // Calculate how much we are shifting beyond the wanted charcodes
				while (shiftsOverLimit > 26) { // Reduce the number till its smaller than the amount of characters in our wanted range
					shiftsOverLimit -= 26;
				}
				charCodeList[i] = 96 + shiftsOverLimit;
			} // The next 3 conditional statements do the same than the previous but for Upper case characters and negative shifting
			else if (currentCharCode >= 65 && currentCharCode <= 90 && (currentCharCode + shift) > 90) { 
				let shiftsOverLimit = (currentCharCode + shift) - 90;
				while (shiftsOverLimit > 26) {
					shiftsOverLimit -= 26;
				}
				charCodeList[i] = 64 + shiftsOverLimit;
			}
			else if (currentCharCode >= 97 && currentCharCode <= 122 && (currentCharCode + shift) < 97) {
				let shiftsUnderLimit = 97 - (currentCharCode + shift);
				while (shiftsUnderLimit > 26) {
					shiftsUnderLimit -= 26;
				}
				charCodeList[i] = 123 - shiftsUnderLimit;
			}
			else if (currentCharCode >= 65 && currentCharCode <= 90 && (currentCharCode + shift) < 65) {
				let shiftsUnderLimit = 65 - (currentCharCode + shift);
				while (shiftsUnderLimit > 26) {
					shiftsUnderLimit -= 26;
				}
				charCodeList[i] = 91 - shiftsUnderLimit;
			}						
		} 
		else {
			charCodeList[i] = currentCharCode;
		}
		encriptedString += String.fromCharCode(charCodeList[i]);
	}

	return encriptedString;
}

module.exports = caesar
