var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    var pattem = {
        writer: post.writer,
        blog_date: post.blog_date
    };
    var comments = {
        content: post.comments,
        writer: post.comments_writer,
        date: post.comments_date
    };
    var temp = [];
    db.blog_search(pattem).then(function (result) {
        temp = result[0].comments;
        temp.push(comments);
        var changes = {
            comments: temp
        };
        db.blog_update(pattem, changes);
    });
    res.send('success');
});

module.exports = router;
