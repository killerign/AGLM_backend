const lecture = require('../model/lecture_model');

exports.past = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    var yyyy = today.getFullYear();
    today = yyyy+'/'+mm+'/'+dd;
     lecture.find({"Date": { $lt : today}},{_id : 0})
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
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    lecture.find({$and :[{"Date":  today}]},{_id : 0})
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

 exports.checkregisters = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    console.log(req.body.uid)
    lecture.find({ $and: [  {"Date": today} ,{ registered: { $in: [req.body.uid] } }  ] },{_id : 0})
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

 exports.checkregisters_fut = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    console.log(req.body.uid)
    lecture.find({ $and: [  {"Date": {$gt : today}} ,{ registered: { $in: [req.body.uid] } }  ] },{_id : 0})
    .then(result =>{
        next();
        res.send(result);
    })
    .catch(err =>
       {
           res.status(400).send(err);
       })
}

exports.checkregisters_pre = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    console.log(req.body.uid)
    lecture.find({ $and: [  {"Date": {$lt : today}} ,{ registered: { $in: [req.body.uid] } }  ] },{_id : 0})
    .then(result =>{
        next();
        res.send(result);
    })
    .catch(err =>
       {
           res.status(400).send(err);
       })
}

exports.counter = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    lecture.countDocuments({$and :[{"Date":  today}]},function (err,count){
        if(err){
            res.sendStatus(400)
        }
        else{
            var now = count;
            lecture.countDocuments({"Date": {$gt : today}},function(err,count){
            if(err){
                res.sendStatus(400)
            }
            else{
                var fut = count;
                lecture.countDocuments({registered : {$in : [req.body.uid]}},function(err,count){
                    if(err){
                        res.sendStatus(400)
                    }
                    else{
                        res.send({"present": now,"future": fut, "my": count})
                    }
                })
            }
            })
        }
    })
    /*
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+"/"+dd;
    lecture.find({"Date":  today})
    .then(result => {
        next();
        res.sendStatus(result)
    })
    .catch(err => {
        res.sendStatus("400")
    })
    call = async function caller(today,uid){
    console.log("here");
    var now = await helper(today);
    console.log("here");
    var fut = await helper1(today);
    console.log("here");
    var mine = await helper2(uid);
    console.log("here");
    var obj = {"present": now,"future": fut,"mine": mine}
    if(now!=-1 && fut!=-1 && mine!=-1)
     {   
         next();
         res.send(obj);
     }
     else{
         res.send("error")
     }
     call(today,req.body.uid);*/
    }

async function helper(date){
    lecture.count({$and :[{"Date":  date}]},{_id : 0})
    .then(result => {
        return(result);
    })
    .catch(err => {
        return -1
    })
}
async function helper1(date){
    lecture.count({"Date":{ $gt : date}},{_id : 0})
    .then(result =>{
            return result;
    })
    .catch(err =>
       {
           return -1
       })
}

async function helper2(uid){
    lecture.count({ registered: { $in: [uid] } })
    .then(result => {
        return(result)
    })
    .catch(err => {
        return -1
    })
}

