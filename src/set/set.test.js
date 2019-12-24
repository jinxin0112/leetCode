const { MySet } = require('./Set');

const set = new MySet();

describe('test Set', () => {
	beforeAll(() => {
		console.log('test Set start...');
	});

	it('test MySet add method', () => {
		set.add(1);
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(3);
		set.add(4);

		expect(set.values()).toEqual([1, 2, 3, 4]);
	});

	it('test MySet delete method', () => {
		set.delete(1);
		set.delete(5);
		set.delete(-1);
		set.delete(4);

		expect(set.values()).toEqual([2, 3]);
	});

	it('test MySet size method', () => {
		expect(set.size()).toBe(2);
	});

	it('test MySet union method', () => {
		const set1 = new MySet();
		set1.add(1);
		set1.add(6);
		set1.add(3);
		set1.add(-1);
		[1, 2, 3, 6, -1].forEach(i => {
			expect(set.union(set1).values()).toContain(i);
		});
	});

	it('test MySet intersection method', () => {
		const set1 = new MySet();
		set1.add(1);
		set1.add(6);
		set1.add(3);
		set1.add(-1);
		[3].forEach(i => {
			expect(set.intersection(set1).values()).toContain(i);
		});
	});

	it('test MySet difference method', () => {
		const set1 = new MySet();
		set1.add(1);
		set1.add(6);
		set1.add(3);
		set1.add(-1);
		[2].forEach(i => {
			expect(set.difference(set1).values()).toContain(i);
		});
	});

	it('test MySet isSubsetOf method', () => {
		const set1 = new MySet();
		set1.add(1);
		set1.add(3);
		expect(set.isSubsetOf(set1)).toBeFalsy();
		set1.delete(1);
		expect(set.isSubsetOf(set1)).toBeTruthy();
	});

	it('test MySet clear method', () => {
		set.clear();
		expect(set.values()).toEqual([]);
	});

	afterAll(() => {
		console.log('test Set end');
	});
});
