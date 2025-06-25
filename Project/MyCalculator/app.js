const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));



app.listen(PORT, ()=>{
    console.log('http://localhost:' +PORT);
})