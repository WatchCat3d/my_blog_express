var express = require('express');
var db = require('../model/BlogComment_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    db.blogComment_count(post).then(function (result) {
        res.send({
            page: result
        });
    });
});

module.exports = router;
