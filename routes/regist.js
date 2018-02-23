var express = require('express');
var db = require('../model/User_handle');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var post = req.body;
    console.log(post);
    res.send("success");
});

module.exports = router;
