var express = require('express');
var db = require('../model/Draft_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    db.draft_search(post).then(function (result) {
        res.send(result[0]);
    });
});

module.exports = router;
