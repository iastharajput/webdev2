const score = 40 
// console
 

const balance = new Number(1000.50);
console.log(balance)

console.log(balance.toString().length); 
console.log(balance.toExponential(2));

console.log(balance.toFixed(2)); // "1000.50"
console.log(balance.toPrecision(4)); // "1000"

const hundred = 1000;
console.log(hundred.toLocaleString('en-IN'))

console.log(hundred.toLocaleString('en-US'))

// ***************************************maths**************************************************
console.log(Math.PI);
Math.random(); // returns a random number between 0 and 1
console.log(Math.random());

console.log(Math.abs (-10)); // absolute value
console.log(Math.ceil(4.2)); // rounds up to the nearest integer
console.log(Math.floor(4.8)); // rounds down to the nearest integer
console.log(Math.round(4.5)); // rounds to the nearest integer
console.log(Math.max(1, 2, 3, 4, 5)); // returns the largest number
console.log(Math.min(1, 2, 3, 4, 5)); // returns the smallest number
console.log(Math.pow(2, 3)); // returns 2 raised to the power of 3
console.log(Math.sqrt(16)); // returns the square root of 16

console.log(Math.random() * 100); // returns a random number between 0 and 100
const min = 10;
const max = 20;

 console.log(Math.floor(Math.random() * (max - min) + min +1))
// returns a random number between min and max (inclusive)