// Objects
let fullName = {
    firstName: "Himanshu",
    lastName: "Yadav",
    age: 20,
};

console.log(fullName.firstName);
console.log(fullName["lastName"]);



// Scope of variables var, let and const
// Example of block scoped for var, let and const
var num = 25;
{
    var num = 30;
    console.log(num); 
}
console.log(num); 
// In both the cases output will be 30


let num1 = 369;
{
    let num1 = 365;
    console.log(num1); //here the output will be 365
}
console.log(num1); // here the output will be 369


const num2 = 69;
{
    //we cannot declare const again in the blocked scope
    console.log(num2); // here the output will be 69
}



// String Template Literals
// This is like writing string with `  ` symbols.

`I counted ${3+4} sheeps.`
// It will return: I counted 7 sheeps.

let product = "Mango";
let quantity = 2;
let price = 30;
let lastmsg=`You bought ${quantity}kg of ${product} which will cost you ${price*quantity}.`;
console.log(lastmsg);
// Output: You bought 2kg of Mango which will cost you 60.

// Can also write multi line string using ``
`This is
    a mango
`
// Output: 'This is \n  a mango\n'



// String Methods
// 1. Non-Destructive (Do not change originl string, just make a  copy of original string and work on that copy.)

let msg = "  I hate you!. Don't talk to me again   ";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
let msg1 = msg.trim();
console.log(msg1); // Trims the extra space present in the beginning and the end of the string.

// There are more mwthods which falls under Non-destructive methods 
//these are indexOf, lastIndexOf, replcae, include, replaceAll etc..

// 2.Destructive (Simpky chnage the original string.)

let str = "Hello World";
console.log(str.substring(4)) //Output: o, World
console.log(str.substring(0,5)) // Output: Hello


// Number primitive
// Number Methods

let num3 = 45678;
Number.MAX_SAFE_INTEGER //OUTPUT: 9007199254740991
Number.MIN_SAFE_INTEGER //OUTPUT: -9007199254740991
Number.isFinite(num3); //OUTPUT: true
Number.isInteger(num3); //OUTPUT: true
Number.isNaN(num3); //OUTPUT: false

Math.random() // For random number genration
Math.floor(Math.random()*10); //For generating a random integer between 0 and 9
Math.floor(Math.random()*5+83); // For genrating random number from 83 to 88


// NULL and Undefined
// NULL: It is just a intentional way of telling that there is  nothing.
// Undefined: Placeholder put by JS Engine when there is no value assigned.

let num; // This is fall under the undefined value.
let num4 = null; // This will make num4 show null.
