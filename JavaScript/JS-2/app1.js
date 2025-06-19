
// Function Definition
// function say(){
//     console.log("Hello from Functions.")
// }

// say(); // calling a function


// function add(x,y){ // x and y are the function parameters
//     let result = x+y;
//     console.log(result);
// }

// add(4,5); // 4 and 5 are the function arguments


// Execution context

// var a=100;

// function fun(){
//     console.log(a);
//     console.log("Inside Fun");
// }

// fun();


//Hoisting : It is JavaScript's default behviour of moving declarations to the top.
//Variable can be used before it has been declared
//Cannot use let and const variable before declairing them.

// console.log(a);

// let a = 300;
// fun();

// function fun(){
//     console.log("Inside fun");
// }

// Dead Temporal Zone : A variable is in this zone from the start of the block until it is declared.

// console.log(b);
// var b = 200;

// var square = function(n){
//     console.log(n*n);
// }

// square(4);


//Default arguments
// function sum(x, y, z=4){
//     return x + y + z;
// }

// console.log(sum(1, 2)); // Gives NaN because we have not given any value to z.To avoid this we can assign any predefined value to z.


// Function Expression (can write any function inside a variable also.)
// const square = function squareOfNum(n){
//     return n*n;
// }

// console.log(square(5));


//Arrow Functions

// const cube = (n)=> { // in arrow function the function keyword keyword can be removed and represented by "=>" sign. 
//     return n*n*n;
// }

// console.log(cube(3));


//Arrow function implicit return (If there is only one paramter present in the function we can write it in the following way)

// const cube = n => n*n*n;

// console.log(cube(3));


// Higher Order Function : A function which returns or accepts another function as an argument.

// function fun(){

//     function innerFun(){
//         console.log("InnerFun");
//     }

//     return innerFun;
// }

// const f = fun();

// console.log(f);
// f();


// function multiPly2(num){
//     return num * 2;
// }

// function a(multiPly2){

//     const result = multiPly2(10);

//     return result;
// }

// const answer = a(multiPly2);
// console.log(answer);


//Scopes
// 1.Global Scope : Anything which is not available inside any other function.
// 2.Functional Scope : Anything available inside any other function.
//Lexical Environment : Local memory + Lexical Environment of its parent.
// var a=100;

// function b(){
//     console.log(a);
// }

// console.log(a);

// b();
