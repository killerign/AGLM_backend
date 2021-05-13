const lecturer = require('../model/lecturer_model');
const lecture = require('../model/lecture_model');

exports.fullInfo = (req,res,next) => {
    lecturer.findOne({"lecturer_id": req.body.id},{_id : 0})
     .then(async (result) =>{
         var info=[];
         const forLoop = async _ => {
             for (let i = 0; i < result['lectures'].length; i++) {
                 var oneLec= await lecture.findOne({"lecture_id": result['lectures'][i]},{_id : 0}).select('title poster about geoinfo');
                 info.push({'title':oneLec['title'],'poster':oneLec['poster'],'about':oneLec['about'],'date':oneLec['geoinfo']['stdate']});
             }
             console.log(info);
           }
         await forLoop();
         /*console.log(result['lectures']);
         result['lectures']=info;
         console.log(result['lectures']);*/
         result['lectures']=info;
         res.send(result);
     })
     .catch(err =>
        {
            res.status(400).send(err);
        })
 }

 exports.pastLectures =  (req,res,next) =>  {
    lecturer.findOne({"lecturer_id": req.body.id},{_id : 0}).select('lectures')
     .then( async (result)  =>{
         var info=[];
        const forLoop = async _ => {
            for (let i = 0; i < result['lectures'].length; i++) {
                var oneLec= await lecture.findOne({"lecture_id": result['lectures'][i]},{_id : 0}).select('title poster about geoinfo');
                info.push({'title':oneLec['title'],'poster':oneLec['poster'],'about':oneLec['about'],'date':oneLec['geoinfo']['stdate']});
            }
          }
        await forLoop();
        /*console.log(result['lectures']);
        result['lectures']=info;
        console.log(result['lectures']);*/
        res.send(info);
     })
     .catch(err =>
        {
            res.status(400).send(err);
        })
 }

 exports.lecturerList =(req,res,next) => {
    lecturer.find().select("lecturer_id name")
    .then (result => {
        next();
        res.send(result);

    } )

    .catch(err => {
        res.sendStatus(400);
    })
}

exports.createlecturer = (req,res,next) => {
    lecturer.countDocuments({},function (err,count){
        if(err){
            res.sendStatus(400)
        }
        else{
            var obj = req.body;
            obj["lecturer_id"] = String(count+2);
            console.log(typeof obj);
            console.log(JSON.stringify(obj));
            lecturer.create(obj)
            .then(result => {
                console.log(result)
                res.sendStatus(200)
            })
            .catch(err => {
                next();
                res.sendStatus(400)
            });
        }
    });
}
        
