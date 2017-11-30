var mongoose = require('mongoose');

//Create a schema-this is like a Blue print (like data types)
var todoSchema = new mongoose.Schema({
    mobile: Number,
    user : { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    address:{ type: mongoose.Schema.Types.ObjectId, ref:'Address'}
    
});
module.exports = mongoose.model('Phone', todoSchema);
//module.exports = todo;

