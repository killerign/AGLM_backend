const Post = require('../model/post_model');



 exports.showIndex = (req, res,next) => {
     console.log(req.body);
     Post.find({"uid": req.body.uid},{_id : 0}) //fetches all the posts
     .then(result => {
        
        next();
         res.send(result);
     }).catch(err => {
         res.status(400).send(err);
     })
 }
//include post schema

