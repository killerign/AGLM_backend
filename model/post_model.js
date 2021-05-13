//post_model.js
const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
    uid:{
        require:true,
        type:String
    },
    roll_no:{
        type:String
    },
    email:{
        type:String
    },
    name:{
        type:String
    },
    type:{
        require:true,
        type:String
    },
},
{ versionKey: false }); 
module.exports = mongoose.model('login',postSchema);