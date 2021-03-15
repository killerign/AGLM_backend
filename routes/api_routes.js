const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const postcontroller = require('../controllers/post_controller');
const router = express();
var cors = require('cors')
router.use(cors());
router.post('/', jsonParser , postcontroller.showIndex);
router.get('/nextlectures',jsonParser, postcontroller.future);
router.get('/completedlectures',jsonParser,postcontroller.past);
router.get('/presentlectures',jsonParser,postcontroller.present)
module.exports = router;