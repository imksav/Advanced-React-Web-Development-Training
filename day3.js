// data structures
/*
Concepts:
Array: Push, pop, map, filter, reduce.
Stack: LIFO (Last In, First Out).
Queue: FIFO (First In, First Out).
*/

// Task Manager Software
let tasks = []

tasks.push({ id: 1, name: 'Learn JS', status: 'active' });
tasks.push({ id: 2, name: 'Learn React JS', status: 'inactive' });
// console.log(tasks);
// tasks.pop();
// console.log(tasks);

// changig the value of the array using key
tasks[0].status = 'inactive';
tasks[1].status = 'active';

// console.log(tasks);

// display all tasks

tasks.forEach(task => {
     console.log(`${task.id} -> ${task.name} -> ${task.status}`);
})


// push and pop

let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits);

fruits.pop();
console.log(fruits);


// map

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num );
console.log(squaredNumbers);

// filter

let ages = [12, 18, 22, 16, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// reduce

let expenses = [100, 200, 300];
let totalExpense = expenses.reduce((total, expense) => total + expense, 0);
console.log(totalExpense);

// object manipulation

let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

// Access properties
console.log(person.name);

// Add a new property
person.city = "London";
console.log(person.city);

// Update a property
person.age = 26;
console.log(person.age)

// Delete a property
delete person.isStudent;
console.log(person.isStudent);


// stack (lifo)

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());

//  queue (fifo)

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue());
console.log(queue.front());


// debugging

console.log('Debugging Example');
console.warn('This is a warning');
console.error('This is an error');
console.table(tasks);
