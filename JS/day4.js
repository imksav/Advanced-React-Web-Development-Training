// function declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Keshav");

// function expression

// greeting("PC"); //this won't work
const greeting = function(name) {
    console.log(`Hello, ${name}!`);
};
greeting("Bhandari"); // this works but calling it before this function assigned won't work

// parameters
function add(a, b) {
    return a + b;
}

// arguments
console.log(add(5, 10));

