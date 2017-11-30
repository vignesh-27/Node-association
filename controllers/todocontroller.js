var bodyParser = require('body-parser');
var User = require('../model/user.js');
var Phone = require('../model/phone.js');
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
        var newPhone = Phone({mobile:9626647981, user:data._id}).save(function(err,data){
            res.json(data);
            console.log(data);
        });
    });
});


app.get('/phone', function(req,res){

    Phone.find({mobile:9626647981}).populate('user').exec(function(err, data){    //Retrieve all data from colletion
        if(err) throw err;
        console.log(data);
    });
        res.render('phone');
});


}