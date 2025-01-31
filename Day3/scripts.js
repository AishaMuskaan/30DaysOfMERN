// arrow function
myfunction = () => "Hello World";
console.log(myfunction());              //Hello World

anotherFunction = yourName => "Hello " + yourName;
console.log(anotherFunction("Aisha"));  //Hello Aisha




// arrays
const subjects = ["English", "Math"];
console.log(subjects[0]);               // English (accessing the first element)

subjects[0] = "Urdu";                   // Modifying the first element
console.log(subjects[0]);               // Urdu

console.log(subjects.length);           // 2 (getting the length of the array)

console.log(subjects.join(" ^ "));      // "Urdu ^ Math" (joining elements with " ^ ")

subjects.push("Science");               // Adding "Science" at the end
console.log(subjects);                  // [ 'Urdu', 'Math', 'Science' ]

subjects.pop();                         // Removing the last element
console.log(subjects);                  // [ 'Urdu', 'Math' ]

console.log(subjects.shift());          // Urdu (removes & returns first element)

const newSubjects = ["Biology", "Chemistry", "Physics"];  
const allSubjects = subjects.concat(newSubjects); // Combining two arrays  
console.log(allSubjects);               // [ 'Math', 'Biology', 'Chemistry', 'Physics' ]

// Destructuring array
let [a, b, c] = allSubjects;  
console.log(b);                         // Biology (extracting second element)






// object
// An object literal is a list of property names:values inside curly braces {}
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;

console.log(person)                 //{ firstName: 'John', lastName: 'Doe', age: 50 }
console.log(Object.keys(person));   //[ 'firstName', 'lastName', 'age' ]
console.log(Object.values(person)); //[ 'John', 'Doe', 50 ]
console.log(Object.entries(person));//[ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 50 ] ]





// class
class Info{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}
person1 = new Info("Aisha",0)
person2 = new Info("Shahid",40)

console.log(person1.name);      //Aisha

