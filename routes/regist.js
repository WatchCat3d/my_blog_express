var express = require('express');
var db = require('../model/User_handle');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var post = req.body;

    /*
    if (db.user_count({username: post.username}) > 0) {
        res.send("exist_username");
    }
    else if (db.user_count({email: post.email}) > 0) {
        res.send("exist_email");
    }
    else {
        console.log(db.user_count({username: post.username}));
        db.user_save(post);
        res.send("success");
    }*/
});

module.exports = router;
