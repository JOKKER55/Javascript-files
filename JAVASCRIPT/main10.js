// main10.js

let num1 = 2;
let num2 = 5;

function findLargerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let result = findLargerNumber(num1, num2);
console.log(result);
