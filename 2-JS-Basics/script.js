// var name = 'John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

var name = 'John';
var age = 26;
console.log(name + age);

// getting info from not the console
var lastName = prompt('what is the last name?')
console.log(lastName);

alert(name + " is a " + age + " years old.")



//LECTURE OPERATORS + / * etc

// IF/ELSE statements allow us to take decisions depending on some condition

var name  = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes') {
	console.log(name. + ' is married.');
} else {
	console.log(name + ' is gonna be married soon.');
}


// if/else statement want a true or false value so here we do not need any comparison operator like this ===
isMarried = false;

if(isMarried) {
	console.log('Yess');
} esle {
	console.log('No');
}





// boolean logic and switch

var job = 'teacher';

switch(job) {
	case 'teacher':
		console.log('John is a teacher.');
		break;
	case 'driver':
		console.log('John is a driver.');
		break;
	default:
		console.log('John do secret things.');
}


// FUNCTION DRY concept

function calculateAge(yearOfBirth) {
	var age = 2018 - yearOfBirth;

	return age
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1980);
var ageMarry = calculateAge(1999);


// functions can call other functions

function yearsUntilRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;

	console.log(retiremnet);

	// if the person already retired we can use if/else statement
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1980);
yearsUntilRetirement('Marry', 1999);







