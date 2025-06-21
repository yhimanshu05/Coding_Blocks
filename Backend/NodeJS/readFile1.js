const {readFile} = require("fs/promises");

let file = readFile("hello.txt", {encoding: 'utf-8'});
// The above line will return a promise

// we have to either use encoding or .toString to remove the buffer.
file.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


// async function readData(){
//     let data = await readFile('hello.txt', {encoding: 'utf-8'});
//     console.log(data);
// }

// readData();

// console.log("Running Statement");
