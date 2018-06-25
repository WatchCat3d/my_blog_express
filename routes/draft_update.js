var express = require('express');
var db = require('../model/Draft_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    var pattem = {
        writer: post.writer,
        draft_date: post.draft_date
    }
    db.draft_update(pattem, post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
