var removeFromArray = function(array, deleteValue1, deleteValue2, deleteValue3, deleteValue4) {
	

	for (let i = 0; i < array.length;i++) {
		if (array[i] == deleteValue1) {
			array.splice(i, 1);
		} 
	}

	for (let i = 0; i < array.length;i++) {
		if (array[i] == deleteValue2) {
			array.splice(i, 1);
		}
	}

	for (let i = 0; i < array.length;i++) {
		if (array[i] == deleteValue3) {
			array.splice(i, 1);
		}
	}

	for (let i = 0; i < array.length;i++) {
		if (array[i] == deleteValue4) {
			array.splice(i, 1);
		}
	}
	return array;
}

module.exports = removeFromArray


// var removeFromArray = function(...args) {
//  const array = args[0]       The first argument is the array to be filtered
//  return array.filter(val => !args.includes(val))           returns the values not included as arguments, returning only the filtered array (need test)
// }

// module.exports = removeFromArray