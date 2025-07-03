const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const mongoose = require('mongoose');
require('dotenv').config();

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(flash());

const mongoUrl = process.env.MONGO_URL;
const sessionSecret = process.env.SESSION_SECRET;

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:'mongodb+srv://yhimanshu05:Golu_123@project0.zymqq2y.mongodb.net/?retryWrites=true&w=majority&appName=Project0'})
}));

app.get('/',(req,res)=>{
    res.redirect('/login')
})

const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');

app.use('/signup',signupRoute);
app.use('/login',loginRoute);
app.use('/profile',profileRoute);

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})

mongoose.connect(mongoUrl)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`);
        })
    })
    .catch(()=>{

    })