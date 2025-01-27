
console.log("Hello World");

let message = "Hello World";
console.log(message);

const value = 10;
console.log(value);
//value = 9; TypeError: Assignment to constant variable.

// Basic calculator
let num1 = 5;
let num2 = 6;
let operator = '/';
let result;

if (operator == '+') {
    result = num1 + num2;
    
} else if (operator == '-') {
    result = num1 - num2;
    
} else if (operator == '*') {
    result = num1 * num2;
    
} else if (operator == '/') {
    result = num1 / num2;
    
}else {
    result = 0;
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

// Write a program to swap two numbers using a temporary variable.
val1 = "a";
val2 = "b";

console.log(`Val1: ${val1}  Val2: ${val2}`);

tempVal = val1;
val1 = val2;
val2 = tempVal;

console.log(`Val1: ${val1}  Val2: ${val2}`);


// Use the modulus operator to check if a number is even or odd.
let num = 9;
if (num % 2 == 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd`);
}

// Write a program to find the largest of three numbers.
let nmbr1 = 9;
let nmbr2 = 5;
let nmbr3 = 71;
let largestNo;

if (nmbr1 > nmbr2 && nmbr1 > nmbr3) {
    largestNo = nmbr1;
} else if (nmbr2 > nmbr1 && nmbr2 > nmbr3){
    largestNo = nmbr2;
} else {
    largestNo = nmbr3;
}

console.log(nmbr1, nmbr2, nmbr3);
console.log(`Largest number is ${largestNo}`);

// Write a program to print numbers from 1 to 10.
for (let i = 1; i < 11; i++) {
    console.log(i)   
}

// Create an object representing a student with properties like name, age, and grade.
person1 = {name: "ABC", age: 5, grade: "A"},
console.log(person1);

person1.subject = "Urdu";
console.log(person1);


subjects = ["Maths","Urdu","English"];
for(let x in subjects){
    console.log(subjects[x]);
}