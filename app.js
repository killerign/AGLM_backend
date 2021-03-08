
const { MongoClient } = require("mongodb");
const express = require('express');
const mongoose = require('mongoose');
const app = express();                                                                                                                                        
const url = "mongodb+srv://AGLM:cseb@aglm.kqx5g.mongodb.net/AGLM-DB?retryWrites=true&w=majority";
const client = new MongoClient(url);
const apiroutes = require('./routes/api_routes');
app.use('/', apiroutes); //using routes specified externally
app.use(express.json());
mongoose.connect(url,{useNewUrlParser: true})
  .then(()=>{
    app.listen(3000);
    console.log('database connected!');
    mongoose.connection.db.listCollections({name: 'login'})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log("yes")
        }
    });
})
  .catch(err => console.log(err));
