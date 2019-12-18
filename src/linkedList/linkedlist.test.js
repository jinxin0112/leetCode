const LinkedList = require('./LinkedList');

const list = new LinkedList();

test('test LinkedList push method', () => {
	list.push(1);
	list.push(2);
	list.push(3);
	expect(list.toString()).toBe('1,2,3');
});

test('test LinkedList insert method', () => {
	list.insert(0, 0);
	list.insert(8, 2);
	expect(list.toString()).toBe('0,1,8,2,3');
});

test('test LinkedList getElementAt method', () => {
	// '0,1,8,2,3'
	expect(list.getElementAt(2).element).toBe(8);
	expect(list.getElementAt(-1)).toBeUndefined();
});

test('test LinkedList remove method', () => {
	// '0,1,8,2,3'
	list.remove(8);
	list.remove(5);
	expect(list.toString()).toBe('0,1,2,3');
});

test('test LinkedList indexOf method', () => {
	// '0,1,2,3'
	expect(list.indexOf(2)).toBe(2);
	expect(list.indexOf(4)).toBe(-1);
});

test('test LinkedList removeAt method', () => {
	// '0,1,2,3'
	list.removeAt(-1);
	list.removeAt(5);
	list.removeAt(3);

	expect(list.toString()).toBe('0,1,2');
});

test('test LinkedList isEmpty method', () => {
	// '0,1,2'
	expect(list.isEmpty()).toBeFalsy();
});

test('test LinkedList size method', () => {
	// '0,1,2'
	expect(list.size()).toBe(3);
});

test('test LinkedList getHead method', () => {
	// '0,1,2'
	expect(list.getHead().element).toBe(0);
});
