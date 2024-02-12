/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
   	let tempNum = num;
	let count = 0;

	while (tempNum !== 0) {
		let digit = tempNum % 10;
		if (num % digit === 0) {
			count++;
		}
		tempNum = Math.floor(tempNum / 10);
	}

	return count;
};