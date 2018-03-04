var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    post = { 
        title: new RegExp(decodeURIComponent(post.title))
    };
    db.blog_search(post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
