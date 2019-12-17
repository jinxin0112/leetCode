const MyDeque = require('./Deque');

function palindromeChecker(target: string): boolean {
	if (target == undefined || target.length === 0) {
		return false;
	}

	const deque = new MyDeque();

	let isEqual = true;
	let firstString, lastString;

	for (let i = 0; i < target.length; i++) {
		deque.addBack(target[i].toLowerCase());
	}
	console.log(deque.toString());
	while (deque.size() > 1 && isEqual) {
		firstString = deque.removeFront();
		lastString = deque.removeBack();
		isEqual = firstString === lastString;
	}

	return isEqual;
}

console.log(palindromeChecker('nixin'));
