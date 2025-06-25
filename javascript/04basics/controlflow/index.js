// if 
// const isuseroggedin  = true;
// if (isuseroggedin) {
//     // code to execute if user is logged in
// }
// if (2 === "2" ){
//     console.log("2 is equal to 2");
//     // code to execute if condition is true
// }
// if 
// (3!= 4) {
//     console.log("3 is not equal to 4");
//     // code to execute if condition is true
// }

const temperature = 20;
if (temperature > 30) {
    console.log("It's a hot day");
}
else{
console.log("its a normal day")}

// if (score> 50) {
//     const score = 100;
//     console.log( 'user power:${score}');
// }this will not work because score is not defined

// if (balance > 500) console.log("You have enough balance");

if (balance < 500) {
    console.log("You don't have enough balance");
} else if (balance === 500) {
    console.log("You have exactly 500 in your account");    
}
else if(balance<700){
    console.log("You have less than 700 in your account");
} else {
    console.log("You have more than 700 in your account");
}
