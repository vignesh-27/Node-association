var mongoose = require('mongoose');

//Create a schema-this is like a Blue print (like data types)
var todoSchema = new mongoose.Schema({
    address: String,
    user : { type: mongoose.Schema.Types.ObjectId, ref:'User'}
});
module.exports = mongoose.model('Address', todoSchema);
//module.exports = todo;

