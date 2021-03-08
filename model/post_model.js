//post_model.js
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
      name:{
        type: String,
      },
      roll_no:{
       type: String,
      },
}); 
module.exports = mongoose.model('login',postSchema);