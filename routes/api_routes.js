const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const postcontroller = require('../controllers/post_controller');
const router = express.Router();
router.get('/', jsonParser, postcontroller.showIndex);
module.exports = router;