const Post = require('../model/post_model');
 exports.showIndex = (req, res,next) => {
     console.log(req.body.uid);
     Post.findOne({"uid": "cO77kwy785eXoSeoVgXgr81T3cq1"}) //fetches all the posts
     .then(result => {
        
        next();
         res.send(result);
     }).catch(err => {
         res.status(400).send(err);
     })
 }
//include post schema
