const { Int32 } = require('bson');
const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postschema = new schema({
    _id:{
        require:true,
        type: ObjectID
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    Date:{
        require:true,
        type:String
    }
});

module.exports = mongoose.model('approval',postschema);