var bodyParser = require('body-parser');
var User = require('../model/user.js');
var Phone = require('../model/phone.js');
var Address = require('../model/address.js');

//var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

app.get('/contact', function(req,res){
        res.render('contact');
    });


app.post('/contact', urlencodedParser, function(req,res){
    //Get data from the view and add it to Mongodb
    var user = {name:req.body.name};
    var newUser = User(user).save(function(err,data){
        if(err) throw err;
            res.json(data);
    });
});


app.get('/meta', (req,res)=>{
    
        Phone.findOne({mobile:8752136487}).populate('user').populate('address').exec((err, data)=>{    //Retrieve selected data from colletion
            if(err) throw err;
           // console.log(data.user.name);
            res.send("Name: "+data.user.name +"Mobile: "+ data.mobile +"Address: "+ data.address.address);
        });
    });

app.get('/phone', (req,res)=>{

    User.find({}, (err, data)=>{    //Retrieve all data from colletion
        if(err) throw err;
        //console.log(data[0].name);
        res.render('phone',{obj:data});
    });
});

app.post('/phone', urlencodedParser, function(req,res){
    //Get data from the view and add it to Mongodb
    var newPhone = Phone({mobile:req.body.mobile, user: req.body.user, address: "5a200321fe0e0756b83b36d1"}).save(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});

app.get('/address', (req,res)=>{
    
    User.find({}, (err, data)=>{    //Retrieve all data from colletion
        if(err) throw err;
            //console.log(data[0].name);
            res.render('address',{obj:data});
        });
});
    
app.post('/address', urlencodedParser, function(req,res){
        //Get data from the view and add it to Mongodb
        var newAddress = Address({address:req.body.address, user: req.body.user}).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
    
}