function nice(name) {

    console.log("hey " + name + ", you are nice");
    console.log("hey " + name + ", you are good");
    console.log("hey " + name + ", your course is good");
}

// console.log("hey harry you are nice");
// console.log("hey harry you are good");
// console.log("hey harry your course is good");
nice("albus");
nice("john");

function add(a, b) {
    console.log("sum is " + (a + b));
}
add(5, 6);
add(10, 20);
function sum(a, b, c=3 ) { 
    return a + b + c;
}
result1=sum(1, 2);
result2=sum(5, 6, 7);
result3=sum(10, 20, 30);

console.log(result1); // 6
console.log(result2); // 18  
console.log(result3); // 60   
