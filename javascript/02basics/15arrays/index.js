
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); 

// arrays take any type of data EVEN arrays

// marvel_heros.concat(dc_heros);

const new_heroes = marvel_heros.concat(dc_heros);

console.log([...marvel_heros, ...dc_heros]); //spread//

const array1 = [1, 2, 3, [2,3,4], [3,4,5]];
const realArray = array1.flat(Infinity);

console.log(realArray);

Array.isArray("wanda"); 
console.log(Array.isArray("wanda")); // false
console.log(Array.from("wanda"))// true
// converts string to array
console.log(Array.from({string: "wanda"})) //intresting//

let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score, score2, score3)); // creates an array from the arguments passed


