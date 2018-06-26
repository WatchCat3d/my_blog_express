var express = require('express');
var db = require('../model/Draft_handle');
var db2 = require('../model/Blog_handle');
var router = express.Router();

router.post('/', function (req, res, next) {
    var temp = req.body;
    var post = {
        title: temp.title,
        content: temp.content,
        writer: temp.writer,
        blog_date: temp.draft_date
    }
    var post2 = {
        writer: temp.writer,
        draft_date: temp.draft_date
    }
    db2.blog_save(post).then(function (result) {
       db.draft_delete(post2).then(function (result) {
            res.send("success");
       })
    })
});

module.exports = router;
