let planet; // undefine
console.log(planet);

let name = null // null value
console.log(name);

// Boolean
let correct = 'false';

if(correct) {
    console.log("Yeahhhhhhhhh");
} else {
    console.log("Ohh Nooo");
}

// getting the var type
console.log(typeof correct);
console.log(correct);

// convert var correct to boolean
// empty, null, 0, undefined
correct = Boolean(undefined);
console.log(correct);

// Number
let planets = 8;
let numberEight = 8.0

console.log(planets == numberEight);

// Convert numbers 
// NaN means not a number
let number = '10';
console.log(number, typeof number);

number = Number(number);
console.log(number, typeof number);