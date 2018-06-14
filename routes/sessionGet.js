var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
    res.send(req.session.username);
});

module.exports = router;
