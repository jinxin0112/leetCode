interface QueueType<T> {
	enqueue: (element: T) => void;
	dequeue: () => T;
	peek: () => T;
	isEmpty: () => boolean;
	size: () => number;
	clear: () => void;
}

class Queue<T = number> implements QueueType<T> {
	private count: number;
	private lowestCount: number;
	private items: { [key: number]: T };

	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	enqueue(element: T) {
		this.items[this.count] = element;
		this.count++;
	}

	dequeue() {
		const lowestEle = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return lowestEle;
	}

	peek() {
		return this.items[this.lowestCount];
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
}
