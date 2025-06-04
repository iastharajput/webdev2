// primitive
 
// 7 types : string, number, boolean, null, undefined, symbol, bigint
 
const score = 100; // number
const name = "John"; // string

const isloggedIn = true; // boolean
const user = null; // null
let username; 

const id = symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
 

// reference(non primitive)

// Array, objects, functions 
const numbers = [1, 2, 3]; 
const person = {
  name: "John",
  age: 30
};

function myFunction() {
  console.log("Hello, World!");
}
console.log(typeof score);  
// Functions are also objects in JavaScript