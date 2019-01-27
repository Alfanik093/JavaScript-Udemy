

var john = {
	firstName: 'John',
	mass: 96,
	height: 1.81,
	johnBMI: function(){
	this.bmi = this.mass / (this.height*this.height);
	return this.bmi;
	}
};

var mark = {
	firstName: 'Mark',
	mass: 92,
	height: 1.83,
	markBMI: function(){
this.bmi = this.mass / (this.height*this.height);
return this.bmi;
}
};

if (john.johnBMI()>mark.markBMI()){
	console.log(john.firstName +' has higher bmi that is: ' +john.bmi)
} else if (mark.bmi>john.bmi){
	console.log(mark.firstName+ ' has higher bmi that is: ' +mark.bmi)
}else {
	console.log('They have eual bmi')
}
console.log(mark.bmi,john.bmi)
