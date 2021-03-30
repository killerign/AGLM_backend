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
    console.log(req.body.rollno)
    lecture.find({ $and: [  {"Date": today} ,{ registered: { $in: [req.body.rollno] } }  ] },{_id : 0})
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
    console.log(req.body.rollno)
    lecture.find({ $and: [  {"Date": {$gt : today}} ,{ registered: { $in: [req.body.rollno] } }  ] },{_id : 0})
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
    console.log(req.body.rollno)
    lecture.find({ $and: [  {"Date": {$lt : today}} ,{ registered: { $in: [req.body.rollno] } }  ] },{_id : 0})
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
    
}