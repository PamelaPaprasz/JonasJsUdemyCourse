
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

// FUNCTION CONSTRUCTOR METHOD
// the newly created object inherits from the constructors protoype property

// pattern = standard way that we have to solve the problem

// first a new EMPTY object is created and then called a function
// calling a function creates a new execution context that also has a this variable 
// which is not pointing to the global object but to this particular one
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	// this.calculateAge = function() {
	// 	console.log(2018 - this.yearOfBirth);
	// }
}

// we can put methods/properties directley to the prototype property of the function constructor too
// this way none of the objs have a calculate method attached to them 
// but they have access to it because it is on their prototype
Person.prototype.calculateAge = 
function() {
	console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// we cerate an object called john by calling a function constructor
var john = new Person('John', 1990, 'teacher');




// OBJECT.CREATE METHOD

// it build an object that inherits directly from that we passed into the first argument
// it allows us to implement a complex inheritance structure in an easier way
// we can directly specify which object should be a prototype

var personProto = {
	calculateAge: function() {
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
	name: { value: 'Jane' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});





