const Post = require('../model/post_model');
 exports.showIndex = (req, res) => {
     Post.findOne({"uid": req.body.uid}) //fetches all the posts
     .then(result => {
        
        next();
         res.send(result);
     }).catch(err => {
         res.status(400).send(err);
     })
 }
//include post schema
