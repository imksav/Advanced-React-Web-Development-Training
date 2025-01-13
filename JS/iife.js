(function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(`The factorial of ${num} is ${result}`);
})(5);


(function(num1, num2, num3) {
    const largest = Math.max(num1, num2, num3);
    console.log(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}`);
})(15, 25, 10);
