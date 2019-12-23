// 使用DoublyLinkedList的原因是其removeAt方法复杂度为O(1)
const { DoublyLinkedList: MyLinkedList3 } = require('./DoublyLinkedList');

class StackLinkedList<T> {
	protected items: any;
	constructor() {
		this.items = new MyLinkedList3();
	}
	push(element: T) {
		this.items.push(element);
	}
	pop() {
		return this.items.removeAt(this.items.size() - 1);
	}
}
