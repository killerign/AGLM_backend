const approve = require('../model/approval_model');

exports.poster = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    today = dd+'/'+mm+'/'+yyyy;
    var obj = req.body;
    obj["Date"]=today;
    /*
    var temp = JSON.string
    obj = JSON.parse(req.body);
    obj.table.push({"Date": today});
    json = JSON.stringify(obj);
    console.log(json);*/
    approve.insertMany(obj)
    .then(result =>{
        next();
        res.send({status:"Success"});
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