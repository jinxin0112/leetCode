const { LinkedList: MyLinkedList2 } = require('./LinkedList');

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1
};

const defaultCompare = <T>(a: T, b: T): number => {
	if (a === b) return 0;
	return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
};

class SortLinkedList<T = number> extends MyLinkedList2<T> {
	private compareFn: (a: T, b: T) => number;
	constructor(compareFn = defaultCompare) {
		super();
		this.compareFn = compareFn;
	}
	insert(element: T) {
		if (this.isEmpty()) {
			return super.insert(element, 0);
		}
		const index = this.getIndexNextSortedElement(element);
		return super.insert(element, index);
	}
	getIndexNextSortedElement(element: T) {
		let current = this.head;
		let index = 0;
		while (index < this.size() && current) {
			if (this.compareFn(element, current.element) === Compare.LESS_THAN) {
				return index;
			}
			current = current.next;
			index++;
		}
		return index;
	}
}

module.exports = {
	SortLinkedList
};
