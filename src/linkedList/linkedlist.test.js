const LinkedList = require('./LinkedList');

const list = new LinkedList();

test('test LinkedList push method', () => {
	list.push(1);
	expect(list.toString()).toBe('1');
});
