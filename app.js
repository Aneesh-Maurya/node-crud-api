var express = require('express');
var path = require('path');
const cors=require('cors')
var cookieParser = require('cookie-parser');
const services=require('./service')
var app = express();
app.use(cors()).options('*', cors()); 
app.use(express.json());
app.post('/insert',services.InsertData)
app.get('/get',services.GetData)
// app.put("/update/:id",services.update)
app.delete("/delete/:id",services.delete)

 module.exports = app;
