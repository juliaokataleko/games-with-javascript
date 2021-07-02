// let mul = calculate(multiply, 100, 8);
// Error because multply is a function statement and load line by line

function log() {
    console.log("Hello new function");
}

console.log(sum(45,20)); 

// Function declaration // Functional hoisting... process before anything
// when we defines a function the vars passed are parameters
function sum(x,y){
    const result = x + y;
    return "The sum result is " + result;
}

// function statement, its not declaration
// process line by line
let add = function (a,b) {
    const result = a + a;
    return "The add result is " + result;
}

console.log(add(23,20)); 

// Call a function // execute the function
// log();

// when we call a function the vars passed are arguments
console.log(sum(100,20)); 

function calculate(func, a, b) {
    return func(a, b)
}

function subtract(a, b) { // load first of all things
    return result = a-b;
}

// function multiple(a, b) {
//     return result = a*b;
// }


// functional statement // load line by line
// we can pass default value
let multiply = function (a, b = 1) {
    return result = a*b;
}

let sub = calculate(multiply, 100, 8);
let summ = calculate(sum, 100, 8);
let mul = calculate(multiply, 100);
console.log(sub, summ, mul);

// infinite params
function calculation(func, a, ...num) {
    return func(a, num);
}

const plus = function(a, numbers) {
    result = a;

    for(let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }

    return result;
}

console.log(calculation(plus, 10, 10, 23));







