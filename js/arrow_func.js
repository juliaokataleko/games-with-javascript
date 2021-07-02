// Arrow are add in ecma 6

// arrow function does not have this property in Objects
const person = {
    age: 10,
    eligibleForVote: () => {
        // on arrow function this refer to window object
        // return this.age; 
    }
}

// console.log(person.eligibleForVote())

// function sayHii() {
//     return "Hello and Hii";
// }

// // arrow function
// const sayHello = () => {
//     return "Hello world";
// }

// function sum(a,b) {
//     return a + b;
// }

// // arrow mode
// const mySum = (a , b) => {
//     return a+  b
// }

// // short mode or inline
// const add = (a, b) => a+b;
// const addOne = (a) => ++a;
// const lessOne = a => --a; // one param no need param

// console.log(add(30,56));
// console.log(addOne(100));
// console.log(lessOne(100));

/**
 * This of simple functions and 
 * arrow functions referes to window object
 * 
 * This in object referes to properties
 */
