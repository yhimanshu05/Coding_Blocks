// MVC Framework : Model View Controller

const express = require('express');
const app = express();
const path = require('path');
const { title } = require('process');

// Setupt the hbs engine
app.set('view engine', 'hbs');
// app.set('views', 'myhbsfolder'); //when we change the folder name


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/learnhbs', (req, res)=>{
    res.render('index.hbs', {
        title: 'My Page'
    });
})

app.listen(8888, ()=>{
    console.log('Server started at http://localhost:8888');
})