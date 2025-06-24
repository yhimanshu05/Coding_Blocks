// app.set : used to configure setting for express application
// app.use : used to add middleware to the app
// app.get : used to define a route that handles GET requests (mainly for fetching dat)
// app.post : used to define that handles POST requests (mainly for submitting data)
// app.listen() : used to start the server and make it listen to the incoming requests


const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:true}))

let tasklist = [];

app.get('/', (req, res)=>{
    res.render('index', {
        tasklist
    });
});

app.post('/addtask', (req, res)=>{
    tasklist.push(req.body.task);
    res.redirect('/'); 
})

app.listen(8888, ()=>{
    console.log(`Server started at http://localhost:8888`);
});