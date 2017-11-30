var bodyParser = require('body-parser');
var User = require('../model/user.js');
var Phone = require('../model/phone.js');
//var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({extended:false});

var mongoose = require('mongoose')
, Schema = mongoose.Schema

var authorSchema = Schema({
name    : String,
stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
author : { type: Schema.Types.ObjectId, ref: 'Author' },
title    : String,
});

var Story  = mongoose.model('Story', storySchema);
var Author = mongoose.model('Author', authorSchema);

module.exports = function(app){

app.get('/', (req,res)=>{
    
    var bob = new Author({ name: 'Bob Smith' });
    
    bob.save(function (err) {
      if (err) return handleError(err);
    
      //Bob now exists, so lets create a story
      var story = new Story({
        title: "Bob goes sledding",
        author: bob._id    // assign the _id from the our author Bob. This ID is created by default!
      });
    
      story.save(function (err, data) {
        if (err) return handleError(err);
        // Bob now has his story
        res.send(data);
      });
    });
    
});

app.get('/phone', function(req,res){
    Story.findOne({ title: 'Bob goes sledding' })
    .populate('author').populate('') //This populates the author id with actual author information!
    .exec(function (err, story) {
      if (err) return handleError(err);
      console.log('The author is %s', story.author.name);
      // prints "The author is Bob Smith"
    });
        res.render('phone');
});


}