const { CircularLinkedList } = require('./CircularLinkedList');

const circularLinkedList = new CircularLinkedList();

test('test CircularLinkedList inert method', () => {
	circularLinkedList.insert(0, 0);
	circularLinkedList.insert(1, -1);
	circularLinkedList.insert(1, 1);
	circularLinkedList.insert(2, 2);
	circularLinkedList.insert(3, 3);
	circularLinkedList.insert(4, 7);
	expect(circularLinkedList.toString()).toBe('0,1,2,3');
});

test('test CircularLinkedList removeAt method', () => {
	circularLinkedList.removeAt(0);
	circularLinkedList.removeAt(-1);
	circularLinkedList.removeAt(7);
	circularLinkedList.removeAt(1);
	circularLinkedList.removeAt(1);

	expect(circularLinkedList.toString()).toBe('1');
});
