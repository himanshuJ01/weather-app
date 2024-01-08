const express = require('express');
const route = express.Router();
const axios = require('axios');
const path = require('path');
const app = express();

// const url = 'http://api.weatherstack.com/current';

// app.use(express.static(path.join(__dirname, '../public')));

route.get('/wheather', (req,res)=>{

    res.render('index');
});




module.exports = route;