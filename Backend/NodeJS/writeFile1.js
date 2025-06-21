const{writeFile} = require('fs/promises');

// let data = " I am writing data using Promises API.";

// let write = writeFile(
//     "World.txt",
//     data,
//     {
//         encoding: 'utf8',
//         flag: 'w'
//     }

// )

// write.then(()=>{
//     console.log("File written successfully");
// })
// .catch((err)=>{
//     console.log("Error ",err.message);
// })

// console.log("Running Statement here below!");


// When we have to synchronise any asynchronised task we use async-await

let data = " I am writing data using Async Await.";


async function writeData(data){
    await writeFile(
        "World.txt",
        data,
        {
            encoding: 'utf8',
            flag: 'a'
        }
    )
    console.log("I am inevitable~Thanos")
}

writeData(data);

console.log("Running statement here below");