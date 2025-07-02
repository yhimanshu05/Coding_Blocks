const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const { mongoConnect } = require('./database/database');


app.use(express.urlencoded({extended:true}));
app.use(express.json()); // Otherwise axios request will not get read
app.use(express.static(path.join(__dirname, 'public')));



const requestHandler = require('./routes/todo');
const { connected } = require('process');
app.use('/', requestHandler);



mongoConnect()
    .then(()=>{
        console.log('Successfully connected to the server.')
        app.listen(PORT, ()=>{
            console.log(`http://localhost:`+PORT);
        });
    })
    .catch(err=>{
        console.log('Cannot connect to our App. ')
    })
