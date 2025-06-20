// Callback Function : A function passed into another function as an argument,
// which then invoked inside the outer function to complete some action.

// function cb(){
//     console.log("Inside cb()");
// }

// function fun(f){
//     console.log('Inside fun');
//     f();

// }

// fun(cb);
// OUTPOUT:  Inside fun
//           Inside cb()



// Async Programming : It  allows you to write code that can perform tasks without blocking the main thread.
// JavaScript is single threaded synchronous language.(Execute next command only when the current command is executed.)


// console.log("START");

// for( let i =1; i <= 10; i++){
//     console.log(i);
// }

// console.log("END");

function fun(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function cb(){
    console.log("Hello");
}


console.log("START");

setTimeout(fun, 5000);

// const id = setInterval(cb, 3000);
console.log("END");

