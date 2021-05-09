const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const postcontroller = require('../controllers/post_controller');
const approvecontroller = require('../controllers/approvecontroller');
const lecturecontroller = require('../controllers/lecture_controller');
const lecturercontroller = require('../controllers/lecturer_controller')
const router = express();
var cors = require('cors')
router.use(cors());
router.post('/', jsonParser , postcontroller.showIndex);
router.get('/nextlectures',jsonParser, lecturecontroller.future);
router.get('/completedlectures',jsonParser,lecturecontroller.past);
router.get('/presentlectures',jsonParser,lecturecontroller.present);
router.post('/requestlogin',jsonParser,approvecontroller.poster);
router.get('/all_login',jsonParser,approvecontroller.sendall);
router.post('/deletelogin',jsonParser,approvecontroller.deleter);
router.post('/mylectures',jsonParser,lecturecontroller.checkregisters);
router.post('/mylectures_future',jsonParser,lecturecontroller.checkregisters_fut);
router.post('/mylectures_pre',jsonParser,lecturecontroller.checkregisters_pre);
router.post('/countlectures',jsonParser,lecturecontroller.counter);
router.post('/createlecture',jsonParser,lecturecontroller.creator);
router.post('/register',jsonParser,lecturecontroller.regis);
router.post('/remove',jsonParser,lecturecontroller.regigas);
router.post('/miniLecturer',jsonParser,lecturercontroller.shortInfo);
module.exports = router;