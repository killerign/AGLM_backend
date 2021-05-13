const approve = require('../model/approval_model');
const post = require('../model/post_model');
exports.poster = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+'/'+dd;
    var obj = req.body;

    obj["Date"]=today;
    var clear = "monday";
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

step_up = (req,res,next) => {

}

exports.deleter = (req,res,next) => {
    console.log(req.body);
    approve.findOneAndDelete({"email" : req.body.email})
    .then (result =>{
        next();
        res.send({status : "Success"});
        if(req.body.uid != ""){
        post.create({"uid": req.body.uid, "type" : "guser" ,"email":req.body.email})
        .then(result => {
            console.log(result);
            next();
            console.log("success")
        })
        .catch(err =>{
            console.log(err)
        })
        }
        else{
            console.log("Non existent")
        }
        })
    .catch(err =>{
        res.send({status : "Failure"});
    })
    }
