var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    var page = post.page;
    delete post.page;
    db.blog_search(post).then(function (result) {
        res.send(result.slice(10 * page, 10 * page + 10));
    });
});

router.get('/', function(req, res, next) {
    var post = req.body;
    db.blog_count(post).then(function (result) {
        res.send({
            page: result
        });
    });

});

module.exports = router;
