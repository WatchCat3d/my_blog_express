var express = require('express');
var db = require('../model/Blog_handle');
var db2 = require('../model/BlogComment_handle');
var router = express.Router();

//删除博客时，要把博客的评论一并删除
router.post('/', function (req, res, next) {
    var post = req.body;
    var post2 = {
        blog_writer: post.writer,
        blog_date: post.blog_date
    }
    db2.blogComment_delete(post2).then(function (result) {
        db.blog_delete(post).then(function (result) {  
            res.send(result);
        });
    })
});

module.exports = router;
