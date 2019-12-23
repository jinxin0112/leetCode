const { SortLinkedList } = require('./SortLinkedList');

const sortLinkedList = new SortLinkedList();

test('test SortLinkedList insert method', () => {
	sortLinkedList.insert(2);
	sortLinkedList.insert(1);
	sortLinkedList.insert(4);
	sortLinkedList.insert(0);
	sortLinkedList.insert(3);

	expect(sortLinkedList.toString()).toBe('0,1,2,3,4');
});
