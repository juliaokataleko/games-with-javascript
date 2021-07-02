function countDown(num) {
    // console.log("Number " + num);

    if(num > 0) {
        countDown(num -1);
    }

}

countDown(100);

//  Factorial
function factorialOf(num) {
    
    let nextNum = num - 1;
    if(nextNum > 0) {
        return num * factorialOf(nextNum);
    } 

    return 1;

}

console.log(factorialOf(10));

let result = 1;
let number = 10;

for(let i = 0; i < number; i++) {
    result = result * (number - i)
}

console.log(result);