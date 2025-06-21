// const fs = require('fs');

// fs.writeFile()


const {writeFile} = require('fs'); 

// let data =" We are learning file system.";
let data =" We are writing file again.";


writeFile(
    'hello.txt',
    data,
    {                                                   
        encoding: 'utf8',
        flag: 'a' // 'w' for writing, 'a' for appending
    },
    (err)=>{
        if(err) return console.log("Error", err);

        console.log("File written successfully");
    }
)