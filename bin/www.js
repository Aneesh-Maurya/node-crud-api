#!/usr/bin/env node
var express = require('express')
const cors=require('cors')
const app=express();
const bodyParser = require('body-parser'); 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Authorization, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
        //res.setHeader('Content-Type', 'application/pdf');
        //res.setHeader('Content-type', mimetype);
    next();
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
var service=require('../app')
app.use(cors()).options('*', cors()); 
app.use('/',service);
 app.listen(3000, '0.0.0.0',(err,res)=>{
    if(err){
        console.log("server not running port 3000")
    }else{
        console.log("server  running port 3000")
    }
 });


