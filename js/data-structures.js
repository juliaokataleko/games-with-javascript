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

let number2 = +null; // another way to convert other types to number
console.log(number2, typeof number2);

// Convert binary to decimal
let numberb = +"0b1111"; // to ocatl "0o1111";
console.log(numberb, typeof numberb);

// covert number to string
console.log(numberb.toString(), typeof numberb.toString());

let price = 100.7848;
roundedPrice = price.toFixed(2);
console.log(price.toLocaleString('ar-EG'));

// parseFloat
console.log(parseFloat(price));
console.log(parseInt(price));