var express = require('express');
var db = require('../model/User_handle');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var post = req.body;
  
    db.user_count({username: post.username}).then(function (result) {
        if (result <= 0) {
            res.send('wrong_username');
        }
        else {
            db.user_count({username: post.username, password: post.password}).then(function (result) {
                if (result <= 0) {
                    res.send('wrong_password');
                }
                else {
                    
                    res.cookie('username', post.username, {
                        expires: new Date(Date.now() + 900000)
                    });
                    
                    req.session.username = post.username;
                    res.send('success');
                }
            });
        }
    });
});

module.exports = router;
