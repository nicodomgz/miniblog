const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Allow', 'GET, POST');
    next();
});

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB,(err,res)=>{

    if (err) throw err;
    console.log('BD online');
});

app.listen(process.env.PORT,()=>{
    console.log('ready');
});
