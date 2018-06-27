var express = require('express');
var db = require('../model/Manager_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    var post = req.body;
    db.manager_count(post).then(function (result) {
        res.send({
            count: result
        });
    });
});

module.exports = router;
