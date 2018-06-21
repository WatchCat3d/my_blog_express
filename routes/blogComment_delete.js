var express = require('express');
var db = require('../model/BlogComment_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var pattem = req.body;
    var post = {
        writer: pattem.writer,
        date: pattem.date,
        content: "[该楼层信息已被删除]"
    }
    //删除评论时，不真正删除，而是将信息改为[该楼层信息已被删除]
    db.blogComment_update(pattem, post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
