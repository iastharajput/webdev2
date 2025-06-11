// singleton

// object literalls

const mySymbol = Symbol("key1");
const person = {
    name: "Darshan",
    age: "30",
    [mySymbol]: "key1", // dynamic key
    location: "India",
    email: "xyz@gamil.com",
    isLoggedin: false,
    lastLoginDate: new Date(12, 2023),
}

// console.log(person);
// console.log(person.name);
// console.log(person["age"]); 
// console.log(person.location);
// console.log( typeof person[mySymbol]); 

// person.email = "hello@gmail.com"; // update value
// Object.freeze(person); // freeze the object, no more changes allowed
// person.email = "hakunamatataa@gmail.com"; // this will not change the email
// console.log(person.email); 

person.greeting = function()
{
console.log("Hello person, ${this.name}");
}
{
    console.log("Hello, " + this.name);
}   
console.log(person.greeting()); // Hello, Darshan
