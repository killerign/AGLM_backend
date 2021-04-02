const { MongoClient } = require("mongodb");
const port = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();                                                                                                                                        
const url = "mongodb+srv://AGLM:cseb@aglm.kqx5g.mongodb.net/AGLM-DB?retryWrites=true&w=majority";
const client = new MongoClient(url);
const apiroutes = require('./routes/api_routes');
app.use('/', apiroutes); //using routes specified externally
app.use(express.json());
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(()=>{
    app.listen(port);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    console.log(mm);
    mongoose.connection.db.listCollections({name: 'login'})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log("yes")
        }
    });
})
  .catch(err => console.log(err));
