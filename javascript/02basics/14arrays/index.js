// arrays

const myarray = [1, 2, 3, 4, 5];
const myarray2 = [ "ironman", "captainamerica", "hulk", "thor", "blackwidow", "spiderman" ];


// console.log(myarray);
// console.log(myarray[0]);
// console.log(myarray[myarray.length - 1]);

console.log(myarray2 [1]);

// array methods
console.log(myarray2.length);
myarray2.push("blackpanther");

console.log (myarray2);
myarray2.unshift("antman");

console.log(myarray2);
myarray2.shift();

console.log(myarray2);

myarray2.includes("mj"); 
console.log(myarray2.includes("mj"));

const myarray3 = myarray2.slice(1, 4);
console.log(myarray3);

const myarray4 = myarray2.join();
console.log(myarray4);
 