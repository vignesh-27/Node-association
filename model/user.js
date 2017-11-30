var mongoose = require('mongoose');

//Create a schema-this is like a Blue print (like data types)
var todoSchema = new mongoose.Schema({
    name: String,
   // phone:{
     //   type: mongoose.Schema.Types.ObjectId,
     //   ref: 'Phone'
   // }
});
module.exports = mongoose.model('User', todoSchema);
//module.exports = todo;

