//Objects and Methods

	var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane','Mar','Bob','Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}};
john.calcAge();
console.log(john);




