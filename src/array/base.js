//@ts-check

let arr = [1, 2, 3];

for (let item of arr) {
	console.log(item);
}

const iterator = arr[Symbol.iterator]();
for (let item of iterator) {
	console.log(item);
	6;
}

const evens = Array.from(arr, x => x % 2 === 0);

console.log(evens);

const arr1 = ['a', 'b', 'A', 'B'];

arr1.sort((a, b) => a.localeCompare(b));

console.log(arr1);

// type array

const int8 = new Int8Array(3);

for (let i = 0; i < int8.length; i++) {
	int8[i] = i + 1;
}

console.log(int8);
