interface Person {
	name: string;
	age: number;
}

const jinixn = {
	name: 'jinxin',
	age: 25,
	phone: 18508218948
};

function printName(person: Person) {
	console.log(person.name);
}


printName(jinixn);