var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var post = req.body;
    console.log(post);
    res.send("success");
});

module.exports = router;
