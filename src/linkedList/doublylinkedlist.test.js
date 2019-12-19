const { DoublyLinkedList, DoublyNode } = require('./DoublyLinkedList');

const doublyLinkedList = new DoublyLinkedList();

test('test DoublyLinkedList push method', () => {
	doublyLinkedList.push(new DoublyNode(1));
	doublyLinkedList.push(new DoublyNode(2));
	doublyLinkedList.push(new DoublyNode(3));
	expect(doublyLinkedList.toString()).toBe('1,2,3');
});

test('test DoublyLinkedList insert method', () => {
	// 1,2,3
	doublyLinkedList.insert(4, 2);
	doublyLinkedList.insert(5, 6);
	doublyLinkedList.insert(9, -1);
	expect(doublyLinkedList.toString()).toBe('1,2,4,3');
});

test('test DoublyLinkedList removeAt method', () => {
	// 1,2,4,3
	doublyLinkedList.removeAt(2);
	doublyLinkedList.removeAt(6);
	doublyLinkedList.removeAt(-1);
	expect(doublyLinkedList.toString()).toBe('1,2,3');
});
