const {
	LinkedList: MyLinkedList,
	Node: MyNode,
	defaultEqualsFn: myDefaultEqualsFn
} = require('./LinkedList');

class DoublyNode<T = any> extends MyNode<T> {
	prev: DoublyNode<T>;
	constructor(elements: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
		super(elements, next);
		this.prev = prev;
	}
}

class DoublyLinkedList<T = any> extends MyLinkedList<T> {
	protected tail: any;
	constructor(equalsFn = myDefaultEqualsFn) {
		super(equalsFn);
		this.tail = null;
	}
	insert(elements: T, index: number) {
		if (index >= 0 && index <= this.count) {
			const node = new DoublyNode(elements);
			let current = this.head;
			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					this.tail = node;
				} else {
					current.prev = node;
					node.next = current;
					this.head = node;
				}
			} else if (index === this.count) {
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				const prevNode = this.getElementAt(index - 1);
				current = prevNode.next;
				prevNode.next = node;
				node.prev = prevNode;
				node.next = current;
				current.prev = node;
			}
			this.count++;
			return true;
		} else {
			return false;
		}
	}
	removeAt(index: number) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next;
				if (this.count === 1) {
					this.tail = null;
				} else {
					this.head.next.prev = undefined;
				}
			} else if (index === this.count - 1) {
				current = this.tail;
				current.prev.next = undefined;
				this.tail = current.prev;
			} else {
				current = this.getElementAt(index);
				const prevNode = current.prev;
				prevNode.next = current.next;
				current.next.prev = prevNode;
			}
			this.count--;
			return current.elements;
		} else {
			return undefined;
		}
	}
}

module.exports = {
	DoublyLinkedList,
	DoublyNode
};
