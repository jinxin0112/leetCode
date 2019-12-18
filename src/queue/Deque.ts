// 双端队列
// 同时满足 LIFO 和 FIFO

interface DequeType<T> {
	isEmpty: () => boolean;
	size: () => number;
	clear: () => void;
	toString: () => string;
	addFront: (element: T) => void;
	addBack: (element: T) => void;
	removeFront: () => T;
	removeBack: () => T;
	peekFront: () => T;
	peekBack: () => T;
}

class Deque<T> implements DequeType<T> {
	private count: number;
	private lowestCount: number;
	private items: { [key: number]: T };

	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	size() {
		return this.count - this.lowestCount;
	}
	isEmpty() {
		return this.size() === 0;
	}
	clear() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}
	toString() {
		return Object.values(this.items).reduce((p, c, i) => (p += `${i === 0 ? '' : ','}${c}`), '');
	}
	addFront(element: T) {
		if (this.isEmpty()) {
			this.addBack(element);
		} else {
			this.items[--this.lowestCount] = element;
		}
	}
	addBack(element: T) {
		this.items[this.count++] = element;
	}
	removeFront() {
		if (this.isEmpty()) return undefined;
		const lowest = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return lowest;
	}
	removeBack() {
		if (this.isEmpty()) return undefined;
		this.count--;
		const highest = this.items[this.count];
		delete this.items[this.count];
		return highest;
	}
	peekFront() {
		return this.items[this.lowestCount];
	}
	peekBack() {
		return this.items[this.count - 1];
	}
}

const deque = new Deque<string>();

console.log(deque.isEmpty());
deque.addBack('jinxin');
deque.addBack('ymj');
console.log(deque.toString());
deque.addBack('gyh');
console.log(deque.toString());
console.log(deque.size());
deque.addFront('ouyang');
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.removeFront();
console.log(deque.toString());
deque.addFront('ouyang');
console.log(deque.toString());

module.exports = Deque;
