const Users = require('../models/users');
const bcrypt = require('bcrypt');
let saltRounds = 10;

module.exports.getSignup = (req,res)=>{
    res.render('signup');
}

module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const existingUser = await Users.findOne({ username });

        if (existingUser) {
            req.flash('msg', 'User already exists');
            return res.redirect('/signup');
        }

        const hash = await bcrypt.hash(password, saltRounds);
        await Users.create({ username, password: hash , isAdmin: false});

        req.flash('msg', 'Signup successful');
        return res.redirect('/login');
    } 
    catch (err) {
        next(err);
    }
};