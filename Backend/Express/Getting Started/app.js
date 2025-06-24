const express = require('express');
const PORT = 8888;
const app = express();
const path = require('path');

app.use('/file', express.static(path.join(__dirname, 'static')));

app.get('/',(req, res)=>{
    // console.log(__dirname);
    console.log(req);
    res.send("<h1>Hello World!</h1>");
})

// app.get('/greet/:name', (req, res)=>{
//     console.log(req);
//     res.send(`Hello! ${req.params.name}`);
// })


// app.get('/greet', (req, res)=>{
//     console.log(req);
//     res.send(`Hello! Good${req.query.x} ${req.query.name}` );
// })


// app.get('/file',(req, res)=>{
//     res.sendFile(path.join(__dirname + '/index.html'));
// })


app.get('/server.js', (req, res)=>{
    res.send(`console.log('Here is the requested JS')`);
})
// app.listen(PORT, (err)=>{
//     console.log(`Server started at http://localhost:${PORT}`)
// } )




// Sending data from webpage to server 

app.use(express.urlencoded({extended:true}))  

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/greet',(req,res)=>{
    res.send(`Hello! GoodMorning, ${req.query.name}`)
})

app.post('/greet',(req,res)=>{
    res.send(`Hello! GoodEvening, ${req.body.name}`)
})

app.listen(PORT, (err)=>{
    console.log(`Server started at http://localhost:${PORT}`)
} )