const Post = require('../model/post_model');
 exports.showIndex = (req, res) => {
     Post.findOne({"uid": req.body.uid}) //fetches all the posts
     .then(result => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
         res.send(result);
     }).catch(err => {
         res.status(400).send(err);
     })
 }
//include post schema
