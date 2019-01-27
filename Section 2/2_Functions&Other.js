/******
* Functions
*/
/*
function calculateAge(birthYear) {
	return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJJane);
	
function yearsUntilRetirement(year,firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if(retirement>0){
console.log(firstName + ' retires in ' + retirement + ' years.');
	}else{
console.log(firstName + 'is already retired');		
	}
	
}
yearsUntilRetirement(1990,'John');
yearsUntilRetirement(1949,'Mike');
yearsUntilRetirement(1969,'Jane');
*/

//Function statements and Expressions
//function(job, firstName){} 

//Function expression
var whatDoYouDo = function(job, firstName){
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives taxi';
		case 'designer':
			return firstName + ' designes stuff';
		default:
			return firstName + ' does nothing';

	}
}
console.log(whatDoYouDo ('driver','John'));
console.log(whatDoYouDo ('teacher','Jаne'));








