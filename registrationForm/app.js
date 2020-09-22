const express = require("express");
const app  = express();
const bodyParser = require('body-parser');
const path  = require('path');
const mongoose = require('mongoose');


app.use(bodyParser());

const url ="mongodb+srv://Akshita:94@Akshita@cluster0.nsnzp.mongodb.net/test?retryWrites=true&w=majority";
app.use(express.static('./public'));
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(function (conn) {
  console.log("Plan Db connected");
}).catch(function (err) {
  console.log(err);
})

const ut = mongoose.model('ut', { Name: String ,email:String,password:String});
// ,Age:Number,College:String,Mobile:Number,email:String,password:String

app.get("/", function(req ,res){
   res.sendFile('index.html');
})


app.post("/register",function(req,res){
  
  const p1 = new ut({  Name: req.body.Name,email:req.body.email,password: req.body.password});
   // Age:req.body.Age,College:req.body.College,Mobile:req.body.Mobile,email:req.body.email,password: req.body.password
    p1.save().then(function(){console.log("saved")});
  
    console.log(req.body);
    //res.sendFile(path.join(__dirname,'/sent.html'));
   
})

app.listen(5000, function(){
    console.log("server started");
})

