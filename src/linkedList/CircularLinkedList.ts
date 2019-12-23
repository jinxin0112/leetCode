const { LinkedList: MyLinkedList1, Node: MyNode1 } = require('./LinkedList');

class CircularLinkedList<T = string> extends MyLinkedList1<T> {
	constructor() {
		super();
	}
	insert(element: T, position: number) {
		if (position >= 0 && position <= this.count) {
			const node = new MyNode1(element);
			const tail = this.getElementAt(this.size() - 1);
			let current = this.head;
			if (position === 0) {
				if (this.head == null) {
					this.head = node;
					node.next = this.head;
				} else {
					this.head = node;
					this.head.next = current;
					tail.next = this.head;
				}
			} else if (position === this.count) {
				tail.next = node;
				node.next = this.head;
			} else {
				const preNode = this.getElementAt(position - 1);
				current = preNode.next;
				preNode.next = node;
				node.next = current;
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
				if (this.size() === 1) {
					this.head = null;
				} else {
					const tail = this.getElementAt(this.count - 1);
					this.head = current.next;
					tail.next = this.head;
				}
			} else {
				const preNode = this.getElementAt(index - 1);
				current = preNode.next;
				preNode.next = current.next;
			}
			this.count--;
			return current.element;
		} else {
			return undefined;
		}
	}
}

module.exports = {
	CircularLinkedList
};
