const lecturer = require('../model/lecturer_model');

exports.shortInfo = (req,res,next) => {
    
    lecturer.findOne({"lecturer_id": req.body.id},{_id : 0})
     .then(result =>{
         next();
         res.send(result);
     })
     .catch(err =>
        {
            res.status(400).send(err);
        })
        
 }
 //kamikaze