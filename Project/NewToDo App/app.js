const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;


app.use(express.urlencoded({extended:true}));
app.use(express.json()); // Otherwise axios request will not get read
app.use(express.static(path.join(__dirname, 'public')));



const requestHandler = require('./routes/todo');
app.use('/', requestHandler);



app.listen(PORT, ()=>{
    console.log(`http://localhost:` +PORT);
});