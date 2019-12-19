const defaultEqualsFn = <T = any>(a: T, b: T): boolean => a === b;

class Node<T = any> {
	constructor(public element: T, public next?: Node<T>) {}
}

interface LinkedListType<T> {
	push: (element: T) => void;
	insert: (element: T, position: number) => void;
	getElementAt: (index: number) => Node | undefined;
	remove: (element: T) => void;
	indexOf: (element: T) => number;
	removeAt: (position: number) => T | undefined;
	isEmpty: () => boolean;
	size: () => number;
	getHead: () => Node<T> | null;
	toString: () => string;
}
class LinkedList<T = any> implements LinkedListType<T> {
	protected count: number;
	protected head: Node<T> | null;
	protected equalsFn: (a: T, b: T) => boolean;
	constructor(equalsFn = defaultEqualsFn) {
		this.count = 0;
		this.head = null;
		this.equalsFn = equalsFn;
	}
	push(element: T) {
		const node = element instanceof Node ? element : new Node(element);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	removeAt(position: number) {
		if (position >= 0 && position <= this.count) {
			let node = this.head;
			if (position === 0) {
				this.head = node.next;
			} else {
				const preNode = this.getElementAt(position - 1);
				node = preNode.next;
				preNode.next = node.next;
			}
			this.count--;
			return node.element;
		} else {
			return undefined;
		}
	}
	indexOf(element: T) {
		let index = 0;
		let current = this.head;
		while (current && !this.equalsFn(current.element, element)) {
			current = current.next;
			index++;
		}
		return current ? index : -1;
	}
	remove(element: T) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}
	insert(element: T, position: number) {
		if (position >= 0 && position <= this.count) {
			const node = new Node(element);
			if (position === 0) {
				const current = this.head;
				this.head = node;
				node.next = current;
			} else {
				const preNode = this.getElementAt(position - 1);
				const current = preNode.next;
				preNode.next = node;
				node.next = current;
			}
			this.count++;
			return true;
		} else {
			return false;
		}
	}
	getElementAt(index: number) {
		if (index >= 0 && index <= this.count) {
			let current = this.head;
			for (let i = 0; i < index && current != null; i++) {
				current = current.next;
			}
			return current;
		} else {
			return undefined;
		}
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.count;
	}
	getHead() {
		return this.head;
	}
	toString() {
		if (this.isEmpty()) {
			return '';
		} else {
			let current = this.head;
			let res = `${current.element}`;
			for (let i = 1; i < this.count; i++) {
				current = current.next;
				res = `${res},${current.element}`;
			}
			return res;
		}
	}
}

module.exports = {
	LinkedList,
	Node,
	defaultEqualsFn
};
