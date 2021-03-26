const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postschema = new schema({
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
});

module.exports = mongoose.model('approval',postschema);