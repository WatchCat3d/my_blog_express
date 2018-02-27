var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    db.blog_save(post);
    res.send('success');
});

module.exports = router;
