const obj = {
	name: 'wangsen',
	age: 'xxx',
	phone: {
		a: { b: 3 },
		c: /^\$/,
		d: new Date(),
		f: {
			foo: () => {
				console.log('okodkwo');
			}
		}
	},
	arr: [1, 2, 3]
};

function deepClone(obj, hash = new WeakMap()) {
	if (typeof obj !== 'object') return obj;
	if (hash.get(obj)) return hash.get(obj);
	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);

	const cloneObj = new obj.constructor();

	hash.set(obj, cloneObj);

	for (let key in obj) {
		const value = obj[key];
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = deepClone(value, hash);
		}
	}

	return cloneObj;
}

obj.o = obj;

console.log(deepClone(obj));
