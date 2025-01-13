// Passing a Function as an Argument

function greet(name) {
     return `Hello, ${name}!`;
}

function displayGreeting(callback, name) {
     console.log(callback(name));
}

displayGreeting(greet, 'Keshav');


// Returning a Function

function multiplier(factor) {
    return (number) => number * factor;
}

const double = multiplier(2);
console.log(double(5));

// forEach, map, filter, reduce

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num * 2));

const square = numbers.map((num) => num ** 2);
console.log(square);

const even = numbers.filter((num) => num % 2 == 0);
console.log(even);

const sum = numbers.reduce((total, num) => total + num);
console.log(sum);

// Write a higher-order function to calculate the total price of items in a shopping cart using reduce().

let prices = [120, 230, 50, 100];
const total_price = prices.reduce((total, price) => total + price, 0);
console.log(total_price);

// Write a higher-order function that filters an array of numbers to only include numbers greater than a given threshold using filter().

let num = [15, 22, 23, 11, 19, 10, 5, 6, 3];
const greater = num.filter((n) => n > 15);
console.log(greater);