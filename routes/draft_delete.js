var express = require('express');
var db = require('../model/Draft_handle');
var router = express.Router();

//删除博客时，要把博客的评论一并删除
router.post('/', function (req, res, next) {
    var post = req.body;
    db.draft_delete(post).then(function (result) {  
        res.send(result);
    });
});

module.exports = router;
