const fs = require('fs');
const pug = require('pug');
const express = require('express');

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res, next) =>{
    res.render('index', {pageTitle: 'homepage', message: 'Hello from my homepage!'})
})

app.listen(3000);
//const c8 = require('./ChallengeSet1/Challenge8');

//c8.challenge8();

