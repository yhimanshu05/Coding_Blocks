// REST : Represntational State Transfer

// It is an architecture followed between client and server to communicate

// CRUD operations between client and server
// C : POST Request
// R : GET Request
// U : PUT Request
// D : DELETE Request

// status codes:
// 200 Range code : Means OK.
// 400 Range code : Means error on the client side.
// 500 Range Code : Means error on the server side.

const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const methodOverride = require('method-override'); 

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));


let students = [
    {id: 1, name:"ABC"},
    {id: 2, name:"DEF"},
    {id: 3, name:"XYZ"},

];

app.get('/students', (req,res)=>{
    res.status(200).send(students);
})

app.get('/students', (req,res)=>{
    const {id} = req.params;
    let s = students.filter(s=>s.id == id);

    if(s.length == 0){
        res.status(400).send("Student not found.");
    }
    else{
        res.status(200).send(s);
    }
    res.status(200).send(students);
})


app.put('/students/:id',(req,res,next)=>{
    const {id} = req.params;
    const {name} = req.body;

    students = students.map((s)=>{
        if(s.id == id){
            return {id: s.id, name}
        }
        else{
            return s;
        }
    })

    res.status(200).send(students);
})

app.delete('/students/:id',(req,res, next)=>{
    const {id} = req.params;

    students = students.filter((s)=>{
        if(s.id == id) {
            return false;
        }else{
            return true;
        }
    })

    res.status(200).send(students);
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:`+PORT);
});