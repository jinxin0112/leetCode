// 使用两个栈来(暂用数组代替)实现一个队列

interface QueueType<T> {
	enqueue: (element: T) => void;
	dequeue: () => T;
	peek: () => T;
	isEmpty: () => boolean;
	size: () => number;
	clear: () => void;
	toString: () => string;
}

class QueueBaseStack<T> implements QueueType<T> {
	private in_items: T[];
	private out_items: T[];
	constructor() {
		this.in_items = [];
		this.out_items = [];
	}
	enqueue(element: T) {
		this.in_items.push(element);
	}

	// 这个方法的时间复杂度是O(1)
	dequeue() {
		if (this.isEmpty()) return undefined;
		if (this.out_items.length === 0) {
			while (this.in_items.length > 0) {
				this.out_items.push(this.in_items.pop());
			}
		}
		return this.out_items.pop();
	}
	peek() {
		return this.out_items[this.out_items.length - 1] || this.in_items[0];
	}
	isEmpty() {
		return this.in_items.length === 0 && this.out_items.length === 0;
	}
	size() {
		return this.in_items.length + this.out_items.length;
	}
	clear() {
		this.in_items = [];
		this.out_items = [];
	}
	toString() {
		this.out_items.reverse();
		return `${this.out_items.toString()}${
			this.in_items.length && this.out_items.length ? ',' : ''
		}${this.in_items.toString()}`;
	}
}

const queue = new QueueBaseStack<string>();
console.log(queue.isEmpty());
queue.enqueue('jinxin');
queue.enqueue('ymj');
queue.dequeue();
queue.enqueue('hello');
queue.enqueue('zhoumin');
console.log(queue.size());
console.log(queue.toString());
