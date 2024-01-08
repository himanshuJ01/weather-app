const http = require('http');
const path = require('path');
const express = require('express');
const weatherstack = require('./routers/router.js');


const app = express();
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static('public'));



// app.use('',(req,res,next)=>{
//     //Allow the req to continue to the next middleware in line.
//     next(); 
// })

app.get('',(req,res,next)=>{
    //Allow the req to continue to the next middleware in line.
   
})


app.use("/",weatherstack);
app.listen(3000, console.log("Server started...."));