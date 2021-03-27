const Post = require('../model/post_model');
const lecture = require('../model/lecture_model');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
today = dd+'/'+mm+'/'+yyyy;
 exports.showIndex = (req, res,next) => {
     console.log(req.body);
     Post.findOne({"uid": req.body.uid},{_id : 0}) //fetches all the posts
     .then(result => {
        
        next();
         res.send(result);
     }).catch(err => {
         res.status(400).send(err);
     })
 }

 exports.past = (req,res,next) => {
     var temp = dd-1+'/'+mm+'/'+yyyy;
     lecture.find({"Date": { $lt : temp}},{_id : 0})
     .then(result =>{
         next();
         res.send(result);
     })
     .catch(err =>
        {
            res.status(400).send(err);
        })
 }

 exports.present = (req,res,next) => {
    var temp = dd-1+'/'+mm+'/'+yyyy;
    lecture.find({$and :[{"Date":  { $lt:today}},{"Date": { $gt: temp}}]},{_id : 0})
    .then(result =>{
        next();
        res.send(result);
    })
    .catch(err =>
       {
           res.status(400).send(err);
       })
}

 exports.future = (req,res,next) => {
    console.log("here");
    lecture.find({"Date":{ $gt : today}},{_id : 0})
     .then(result =>{
             next();
             console.log(result);
             res.send(result);
     })
     .catch(err =>
        {
            res.status(400).send(err);
        })
 }
//include post schema

