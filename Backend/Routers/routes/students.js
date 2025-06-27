const express = require('express');
const router = express.Router();

const students = [
    "Tripti",
    "Vishal",
    "Yash"
];

router.get('/',(req, res, next)=>{
    res.send(students);
})

router.post('/add',(req, res, next)=>{
    const {name} = req.body;
    students.push(name);
    res.redirect('/students');
})

module.exports = router;