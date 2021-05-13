const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
        regcount: {
          type: String,
          require : true
        },
        poster: {
          type: String,
          require: true
        },
        organizer: {
          type: String,
          require: true
        },
        title: {
          type: String,
          require : true
        },
        about: {
          type: String,
          require: true
        },
        syllabus: {
          type: Array,
          require: true
        },
        requirements: {
            type: Array,
            require: true
        },
        fee: {
          type: String,
          require: true
        },
        geoinfo: {
          stdate: {
            type: String,
            require: true
          },
          eddate: {
            type: String,
            require: true
          },
          sttime: {
            type: String,
            require: true
          },
          edtime: {
            type: String,
            require: true
          },
          venue: {
            type: String,
            require: true
          },
          certificate: {
            type: String,
            require: true
          }
        },
        lecture_id: {
          type: String,
          require: true
        },
        lecturer_id: {
          type: String,
          require: true
        },
        registered: {
          type: Array,
          require: true
        },
        repository:{
          type: Array,
          require: true
        }
      
},
{ versionKey: false }); 
module.exports = mongoose.model('lectures',postSchema);