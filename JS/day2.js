// variables, operators, operands
let length = 10;
let width = 15;
const area = length * width;
const perimeter = 2 * (length + width);
console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);


// conditionals and iterations

// if...else....
let num = 11;
if (num % 2 == 0) {
     console.log(`${num} is Even.`);
} else {
     console.log(`${num} is Odd.`); 
}


// if....else if.....else....
let age = 25;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}


// switch

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);


// for....loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}


// while......loop
let count = 0;

while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

// do...while....loop
let number = 0;

do {
    console.log("Number is: " + number);
    number++;
} while (number > 5);


// Data Types and Coercion

// Strings, number
let greeting = "Hello, world!";
let times = 2;
for (let index = 0; index < times; index++) {
     console.log(greeting);
}

// Boolean
let isStudent = true;
console.log(isStudent);

// undefined
let name;
console.log(name);

// null
let emptyValue = null;
console.log(emptyValue);

// symbol
let uniqueId = Symbol("id");
console.log(uniqueId);

// object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(person);

// array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// implicit coercion
let result = 5 + '5';
console.log(result);

// explicit coercion
let value = Number('5');
console.log(value);