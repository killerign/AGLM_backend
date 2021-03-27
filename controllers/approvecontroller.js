const approve = require('../model/approval_model');

exports.poster = (req,res,next) => {
    console.log("testing");
    approve.insertMany(req.body)
    .then(result =>{
        next();
        res.send({status:"Sucess"});
    })
    .catch(err=>{
        res.send({status:"Failure"});
    })
}

exports.sendall = (req,res,next) => {
    console.log("Here mate");
    approve.find({},{_id : 0})
    .then(result => {
        next();
        res.send(result);
    })
    .catch(err=>{
        res.send({status : "Failure"});
    })
}

exports.deleter = (req,res,next) => {
    console.log("ignormus");
    approve.deleteOne({ email : req.body.email},{_id: 0})
    .then(result => {
        next();
        res.send({status: "Success"});
    })
    .catch(err => {
        res.send({status: "Failure"});
    })
}