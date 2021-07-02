// closure help us to preserve the value of variable defined out of the function

let number = 0;

setInterval(() => { // Callback function
    number++;
    console.log(number);
}, 1000)
// function counter() {

//     let privateValue = 0;

//     function increment() {
//         privateValue++;
//     }

//     function decrement() {
//         privateValue--;
//     }

//     function value() {
//         return privateValue;
//     }

//     return {
//         increment, // OR increment: increment
//         decrement, // OR decrement: decrement
//         value // OR counter: counter
//     };

// }

// const myCounter = counter();
// myCounter.increment()
// console.log(myCounter.value());
// myCounter.increment()
// myCounter.increment()
// myCounter.increment()
// console.log(myCounter.value());
// myCounter.decrement()
// console.log(myCounter.value());

// function increment() {

//     let counter = 0;
//     function set() {
//         counter++;
//         return counter
//     }

//     return set;
// }

// const increase = increment();

// console.log(increase());
// console.log(increase());
// console.log(increase());