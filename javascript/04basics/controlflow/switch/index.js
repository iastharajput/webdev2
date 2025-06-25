// Switch statement example

// const month = 3 

// switch (month) {
//     case 1:
//         console.log("January");
    
//         break;
//         case 2:
//             console.log$("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
// }
// // for string we will just use the console.log method to print the month name
// const userEmail = "abc@gmail.com"
// if (userEmail)

//     {                                       
//     console.log("Email is valid")
// } else {    
//     console.log("Email is not valid")

// }

// // for number we will use the console.log method to print the number
// const userAge = 18
// if (userAge >= 18) {
//     console.log("User is an adult")
// } else {
//     console.log("User is a minor")
// }
// // falsy values
// // false, 0 , "", null, undefined, NaN

// true values
// "0", "false", " ", [], {}, 1, -1, Infinity, -Infinity
// const userEmail = []
// if (userEmail.length > 0) {
//     console.log("Email is valid")
// } else {
//     console.log("Email is not valid")
// }
const emptyObject = {};
if (Object.keys(emptyObject).length > 0) {
    console.log("Object is not empty");
} else {
    console.log("Object is empty");
}

// Nullish coalescing operator


let val1;
val1=5?? 10; // If val1 is null or undefined, it will be assigned 10
console.log(val1); // Output: 5
val1= null ?? 10
console.log(val1); // Output: 10

// ternary operator 
const iceTeaPrice= 50;
iceTeaPrice > 50 ? console.log("Ice tea is expensive") : console.log("Ice tea is affordable");     