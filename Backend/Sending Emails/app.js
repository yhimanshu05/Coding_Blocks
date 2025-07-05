require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid');

const mailer = nodemailer.createTransport(
  sgTransport({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

app.set('view engine','hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const { email } = req.body;

  mailer.sendMail({
    to: email,
    from: 'yhimanshu4757@gmail.com',
    subject: 'Hii !',
    text: 'Welcome to my page... Its Himanshu here !',
    html: '<b>Great! Signup done</b>'
  })
    .then(() => {
        console.log('Email sent: ');
        res.send('Done');
    })
    .catch((err) => {
        console.error('Email send error:', err);
        res.send('Failed to send email');
    });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});