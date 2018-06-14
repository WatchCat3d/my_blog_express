var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    req.session.username = req.body.username;
    res.send(req.session.username);
});

module.exports = router;
