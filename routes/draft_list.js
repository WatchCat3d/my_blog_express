var express = require('express');
var db = require('../model/Draft_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var post = req.body;
    var page = post.page;
    delete post.page;
    db.draft_search(post).then(function (result) {
        res.send(result.slice(10 * page, 10 * page + 10));
    });
});

module.exports = router;
