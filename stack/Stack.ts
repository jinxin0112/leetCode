interface StackType<T> {
	push: (element: T) => void;
	pop: () => T;
	peek: () => T;
	isEmpty: () => boolean;
	clear: () => void;
	size: () => number;
}

class StackBaseArray<T = number> implements StackType<T> {
	private items: T[];
	constructor() {
		this.items = [];
	}
	push(element) {
		this.items.push(element);
	}
	pop() {
		return this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	clear() {
		this.items = [];
	}
	size() {
		return this.items.length;
	}
	toString() {
		return this.items.toString();
	}
}

class StackBaseObject<T = number> implements StackType<T> {
	private count: number;
	private items: { [key: string]: T };
	constructor() {
		this.count = 0;
		this.items = {};
	}
	push(element: T) {
		this.items[this.count] = element;
		this.count++;
	}
	pop() {
		if (this.isEmpty()) return undefined;
		this.count--;
		const last = this.items[this.count];
		delete this.items[this.count];
		return last;
	}
	peek() {
		return this.items[this.count - 1];
	}
	isEmpty() {
		return this.count === 0;
	}
	clear() {
		// this.items = {};
		// this.count = 0;

		// LIFO
		while (!this.isEmpty()) {
			this.pop();
		}
	}
	size() {
		return this.count;
	}
	toString() {
		return Object.values(this.items).reduce((p, c, i) => (p += `${i !== 0 ? ',' : ''}${c}`), '');
	}
}

//  better data protected
//  可读性差，扩展性差
const items = new WeakMap();
class StackBaseWeakMap<T = number> implements StackType<T> {
	constructor() {
		items.set(this, []);
	}
	push(element) {
		items.get(this).push(element);
	}
	pop() {
		return items.get(this).pop();
	}
	peek() {
		const s = items.get(this);
		return s[s.length - 1];
	}
	isEmpty() {
		return items.get(this).length === 0;
	}
	clear() {
		items.set(this, []);
	}
	size() {
		return items.get(this).length;
	}
	toString() {
		return items.get(this).toString();
	}
}

module.exports = StackBaseArray;
