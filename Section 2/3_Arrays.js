//new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array (1990,1969,1948);
console.log(names.length);
console.log(names[2]);
//mutate array
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';	
console.log(names);
console.log(names.length);

//DIFFERENT data types

var john = ['John','Smith',1990,'teacher',false];
//methods  
john.push('blue'); // push adds to the array end
john.unshift('Mr.') // adds to the beggining of the array
console.log(john);

john.pop() // removes from the end, can be used multiple times
console.log(john);

john.shift();
console.log(john); // removes the first array

console.log(john.indexOf(1990)); // indexes its number of the array  (we can test if its in the array)

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'
console.log(isDesigner);
//if example with indexOf







