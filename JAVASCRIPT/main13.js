// main13.js

function checkNumbers(num1, num2) {
  if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(checkNumbers(10, 20)); // Output: true
console.log(checkNumbers(15, 5));  // Output: true
console.log(checkNumbers(25, 30)); // Output: false

