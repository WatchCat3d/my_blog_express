var express = require('express');
var db = require('../model/Blog_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    db.blog_delete(post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
