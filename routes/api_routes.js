const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const postcontroller = require('../controllers/post_controller');
const router = express.Router();
var cors = require('cors')
router.post('/', jsonParser, cors() , postcontroller.showIndex);
module.exports = router;