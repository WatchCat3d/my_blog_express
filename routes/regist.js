var express = require('express');
var db = require('../model/User_handle');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var post = req.body;

    //用promiss实现异步，否则返回的user_count是undefined
    db.user_count({username: post.username}).then(function (result) {
        if (result > 0) {
            res.send('exist_username');
        }
        else {
            db.user_count({email: post.email}).then(function (result) {
                if (result > 0) {
                    res.send('exist_email');
                }
                else {
                    db.user_save(post);
                    res.send('success');
                }
            })
        }
    });
    
});

module.exports = router;
