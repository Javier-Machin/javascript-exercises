var fibonacci = function(number) {
	if (Number(number) < 0 || !(Number(number)) ) { return "OOPS" };
	number = Number(number);

	let result = [0,1];
	for (let i = 1; i < number; i++) {
		result.push(result[i-1] + result[i]);
	}	
	return Number(result.slice(-1));
}

//solution without array
//if (count < 0) return "OOPS";
//  let a = 0;
//  let b = 1;
//  for (let i = 1; i < count; i++) {
//    const temp = b;
//    b = a + b;
//    a = temp;
//  }
//  return b;
//};


module.exports = fibonacci
