var express = require('express');
var db = require('../model/Creator_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    db.creator_search(post).then(function (result) {
        res.send(result);
    });
});

module.exports = router;
