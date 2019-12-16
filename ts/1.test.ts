interface Person {
	name: string;
	age: number;
}

const jinxin = {
	name: 'jinxin',
	age: 25,
};

function printName(person: Person) {
	console.log(person.name);
}

const friends = [
	jinxin
]

printName(jinxin);