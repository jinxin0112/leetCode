// 循环队列-击鼓传花
const MyQueue = require('./Queue');

function hotPotato<T>(elements: T[], num: number): T {
	const queue = new MyQueue();
	// const elimitatedList = [];

	for (let i = 0; i < elements.length; i++) {
		queue.enqueue(elements[i]);
	}

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue());
		}
		console.log(`淘汰${queue.dequeue()}`);
	}

	return queue.dequeue();
}

const names = ['jinxin', 'wangsen', 'ouyang', 'liumingsong', 'huangsong'];

console.log(hotPotato(names, 3));
