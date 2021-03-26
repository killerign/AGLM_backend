//post_model.js
const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
    _id:{
        require:true,
        type : ObjectID
    },
    uid:{
        require:true,
        type:String
    },
    roll_no:{
        require:true,
        type:String
    },
    name:{
        require:true,
        type:String
    },
    type:{
        require:true,
        type:String
    },
}); 
module.exports = mongoose.model('login',postSchema);