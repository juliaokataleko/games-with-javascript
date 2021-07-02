// Recursive function

let i = 0;

const recussive = function() {
    i++;
    if(i > 10) {
        return;
    }

    console.log(i);
    recussive();
}

recussive();