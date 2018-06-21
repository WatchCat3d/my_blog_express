var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    var pattem = {
        writer: post.writer,
        blog_date: post.blog_date
    }
    db.blog_update(pattem, post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
