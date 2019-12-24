interface SetType<T> {
	add: (element: T) => boolean;
	delete: (element: T) => T | undefined;
	has: (element: T) => boolean;
	size: () => number;
	isEmpty: () => boolean;
	values: () => T[];
	clear: () => void;
	union: (s: MySet) => MySet;
	intersection: (s: MySet) => MySet;
	difference: (s: MySet) => MySet;
	isSubsetOf: (s: MySet) => boolean;
}

class MySet<T = any> implements SetType<T> {
	// 用对象能保证唯一性，但是有一个缺陷: 无法按插入顺序迭代
	private items: { [key: string]: T };
	constructor() {
		this.items = {};
	}
	add(element: T) {
		if (!this.has(element)) {
			this.items[String(element)] = element;
			return true;
		}
		return false;
	}
	delete(element: T) {
		if (this.has(element)) {
			const deleted = this.items[String(element)];
			delete this.items[String(element)];
			return deleted;
		}
		return undefined;
	}
	has(element: T) {
		return Object.prototype.hasOwnProperty.call(this.items, element);
	}
	size() {
		return Object.keys(this.items).length;
	}
	isEmpty() {
		return Object.keys(this.items).length === 0;
	}
	values() {
		return Object.values(this.items);
	}
	clear() {
		this.items = {};
	}
	union(set: MySet) {
		const resSet = new MySet();
		this.values().forEach(i => resSet.add(i));
		set.values().forEach(i => resSet.add(i));
		return resSet;
	}
	intersection(set: MySet) {
		const resSet = new MySet();
		const lessSet = this.size() > set.size() ? set : this;
		const bigSet = this.size() < set.size() ? set : this;
		lessSet.values().forEach(i => {
			if (bigSet.has(i)) resSet.add(i);
		});
		return resSet;
	}
	difference(set: MySet) {
		const resSet = new MySet();
		this.values().forEach(i => {
			if (!set.has(i)) resSet.add(i);
		});
		return resSet;
	}
	isSubsetOf(set: MySet) {
		if (set.size() > this.size()) return false;
		return set.values().every(i => this.has(i));
	}
}

module.exports = { MySet };
