// Arithmetic Operators
let x = 62;
let y = 3;

let add = x + y;        
let subtract = x - y;   
let multiply = x * y;   
let divide = x / y;     
let remainder = x % y;    
let exponent = x ** y;     

console.log(add); // OUTPUT:65
console.log(subtract); // OUTPUT:59
console.log(multiply); // OUTPUT:186
console.log(divide); // OUTPUT:20.666..
console.log(remainder); // OUTPUT:2
console.log(exponent); // OUTPUT:238328


// Comparison Operators

let isEqualTo = ( x == y); 
let isNotEqualTo = (x != y); 
let isGreaterThan = (x > y); 
let isLessThan = (x < y); 

let isStrictEqualTo = (x === y); 
let isStrictNotEqualTo = (x !== y); 
let isGreaterThanEqualTo = (x >= y); 
let isLessThanEqualTo = (x <= y); 

console.log(isEqualTo); //OUTPUT:false
console.log(isNotEqualTo); //OUTPUT:true
console.log(isGreaterThan); //OUTPUT:true
console.log(isLessThan); //OUTPUT:false
console.log(isStrictEqualTo); //OUTPUT:false
console.log(isStrictNotEqualTo); //OUTPUT: true
console.log(isGreaterThanEqualTo); //OUTPUT: true
console.log(isLessThanEqualTo); //OUTPUT: false


// Decision Making and Loops in JavaScript 
let a=10;
let b=20;

if(a<b){
    console.log("a is smaller.");
}


const  num=99;
if(num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

const age = parseInt() (prompt("Enter your age: ")); //Take the input from the user
console.log(age); // Prints the value given by the user as input
console.log(typeof age); // Will give Number as we have set it in the above line of code.

if(age < 18){
    alert("You cannot enter.");
}
else if(age >=18 && age <25){
    alert("You can enter the club but cannot drink.");
}
else{
    alert("YOU CAN ENTER THE CLUB AND CAN DRINK ALSO.");
}


// for loop
// for(initialisation; condition check; updation condition){
//     // work
// }

for (let num = 1; num <= 10; num++){
    if (num === 5){
        break;
        // continue;
    }
    console.log(num1);
}

// console.log("Outside Loop");

// Infinite loop
// for(let i = 100; i >= -1; i++){
//     console.log(i);
// }

//while loop
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}


// for..of loop
const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

for(let fruit of fruits){
    console.log(fruit);
}

const car = {
    name: 'BMW',
    price: 20000000,
    isRWD: true
}

for(let i of car){
    console.log(i); // will show error because JS Objects are not iterable.
}


// for..in loop
// can use 'in' instead of 'of' which will iterate only the names not the values.

for(let i in car ) {
    console.log(`${i}-->${car[i]}`);
}