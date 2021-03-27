const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const postcontroller = require('../controllers/post_controller');
const approvecontroller = require('../controllers/approvecontroller');
const router = express();
var cors = require('cors')
router.use(cors());
router.post('/', jsonParser , postcontroller.showIndex);
router.get('/nextlectures',jsonParser, postcontroller.future);
router.get('/completedlectures',jsonParser,postcontroller.past);
router.get('/presentlectures',jsonParser,postcontroller.present);
router.post('/requestlogin',jsonParser,approvecontroller.poster);
router.get('/all_login',jsonParser,approvecontroller.sendall);
router.post('/deletelogin',jsonParser,approvecontroller.deleter);
module.exports = router;