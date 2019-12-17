const Stack = require('./Stack');

function decimalToBinary(decNumber: number): string {
	const stack = new Stack();

	let number = decNumber;
	let binaryString = '';

	while (number > 0) {
		stack.push(Math.floor(number % 2));
		number = Math.floor(number / 2);
	}

	while (!stack.isEmpty()) {
		binaryString += stack.pop().toString();
	}

	return binaryString;
}

console.log(decimalToBinary(10));

function baseConverter(decNumber: number, base: number = 2): string {
	if (!(base >= 2 && base <= 32)) return '';

	const stack = new Stack();
	const digits = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let number = decNumber;
	let resString = '';

	while (number > 0) {
		stack.push(Math.floor(number % base));
		number = Math.floor(number / base);
	}

	while (!stack.isEmpty()) {
		resString += digits[stack.pop()];
	}

	return resString;
}

console.log(baseConverter(10, 8));
