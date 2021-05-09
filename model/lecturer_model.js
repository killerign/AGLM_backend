const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
        name: {
          type: String,
          require : true
        },
        degree: {
          type: String,
          require: true
        },
        bio: {
          type: String,
          require: true
        },
        gmail: {
          type: String,
          require : true
        },
        linkedin: {
          type: String,
          require: true
        },
        achievements: {
          type: Array,
          require: true
        },
        lectures: {
            type: Array,
            require: true
        },
        lecturer_id: {
          type: String,
          require: true
        },
        profile: {
          type: String,
          require: true
        },
      
},
{ versionKey: false }); 
module.exports = mongoose.model('lecturers',postSchema);