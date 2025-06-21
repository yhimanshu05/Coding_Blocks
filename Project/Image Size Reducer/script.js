const fs = require('fs');

fs.readFile('image.png',{
    encoding:'base64'
},(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})


let file = fs.readFileSync('image.png');
console.log(file);

let num = file.toString('base64');

console.log(num);

// How to write the file
fs.writeFileSync('image.txt',num);


// Text to  Image conversion
newImg = fs.readFileSync("image.txt",{encoding: 'utf-8'});

let buffer = Buffer.from(newImg, 'base64');
console.log(buffer); 

fs.writeFileSync("image.png",buffer);

// Reducing the size of image (using jimp)

const jimp = require('jimp');

jimp.read('image.png',(err,image)=>{
    if (err) throw err;
    image
     .resize(256, 256)
     .quality(60)
     .write('image-small.png');
});