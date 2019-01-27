/*var markHeight = 1.75;
var johnHeight = 1.82;
var markMass = 84;
var johnMass = 75;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);

var bmiCompare = markBMI > johnBMI;
console.log (bmiCompare);

console.log('Is Mark\'s BMI higher than John\'s? ' + bmiCompare);
*/

/*var firstName = 'John';
var civilStatus = 'signel';
if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}*/


/*var markHeight = 1.75;
var johnHeight = 1.82;
var markMass = 84;
var johnMass = 70;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
	console.log('Mark\'s BMI is higher than John\'s.')
} else {
	console.log('John\'s BMI is higher than John\'s.')
}
console.log(markBMI,johnBMI);

*/

/*var firstName = 'John';
var age = 13;

if (age<13){
	console.log(firstName + 'is a boy.');
} else if ( age>=13&& age<=21){
	console.log(firstName + 'is a teenager.');
}else if(age>21){
	console.log(firstName + 'is a man.');
}
*/
// ternary operator
/* same as if else
var firstName = 'John';
var age = 14;

age >= 18? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);
*/ 
// switch statement
/*
var job = 'instructor';
var firstName = 'John';
switch(job) {
	case 'teacher':
	case 'instructor':
	console.log(firstName + 'teaches kids how to code');
	break;
	case 'driver':
	console.log(firstName + 'drives uber');
	break;
	case 'designer':
	console.log(firstName + 'designes websites');
	break;
	default:
	console.log(firstName + 'is not working');
}*/

/*
var firstName = 'John';
var age = 31;
switch (true) {
case (age<=13):
console.log(firstName + ' is a boy.');
break;
case (age>13 && age<=20):
console.log(firstName + ' is a teenager');
break;
case (age>20 && age<=30):
console.log(firstName + ' is a man');
break;
default:
console.log(firstName + ' might be older');
}*/

/*var height;
height = 23;
if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable is not being defined');
}

if (height == '23') {
	console.log('The == operator does type coercion!');
}*/

/*
var mikeTeam = (116+94+101)/3;
var johnTeam = (89+120+50)/3 ;
var maryTeam = (97+134+80)/3;
console.log(mikeTeam,johnTeam,maryTeam);



switch(true) {
	case (mikeTeam>johnTeam && mikeTeam>maryTeam):
		console.log('Mike\'s team wins with an avrg score of ' + mikeTeam);
		break;
	case (johnTeam>mikeTeam && johnTeam>maryTeam):
		console.log('John\'s team wins with an avrg score of ' + johnTeam);
		break;
	case (maryTeam>mikeTeam && maryTeam>johnTeam):
		console.log('Mary\'s team wins with an avrg score of ' + maryTeam);
		break;
	case (mikeTeam>johnTeam && mikeTeam===maryTeam):
		console.log('Draw between Mike and Marry with an avrg score of ' +mikeTeam);
		break;
	case (mikeTeam>maryTeam && mikeTeam===johnTeam):
		console.log('Draw between Mike and John with an avrg score of ' +mikeTeam);
		break;
	case (johnTeam>mikeTeam && johnTeam===maryTeam):
		console.log('Draw between Mary and John with an avrg score of ' +johnTeam);
		break;
	default:
		console.log('Wrong calculation');
}


/*










