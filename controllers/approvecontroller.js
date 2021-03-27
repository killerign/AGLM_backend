const approve = require('../model/approval_model');

exports.poster = (req,res,next) => {
    console.log("testing");
    approve.insertMany(req.body)
    .then(result =>{
        next();
        res.send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

exports.sendall = (req,res,next) => {
    console.log("Here mate");
    approve.find({_id : 0})
    .then(result => {
        next();
        res.send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
}

exports.deleter = (req,res,next) => {
    console.log("ignormus");
    approve.deleteOne({ email : req.body.email},{_id: 0})
    .then(result => {
        next();
        res.send(result);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}