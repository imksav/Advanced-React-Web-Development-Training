// Task 1: Write a Function to Calculate Factorial

// using loop...
function factorial(num) {
     let result = 1;
     for (let i = 1; i <= num; i++) {
          result *= i;
     }
     return result;
}

console.log(factorial(0));


// using if...else...
function fac(num) {
     if (num == 0 || num == 1) {
          return 1;
     } else {
          return num * (fac(num - 1));
     }
}

console.log(fac(5));