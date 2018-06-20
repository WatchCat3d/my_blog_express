var express = require('express');
var db = require('../model/Creator_handle');
var dbUser = require('../model/User_handle');
var router = express.Router();

/* GET s listing. */
router.post('/', function(req, res, next) {
    var post = req.body;

    //用promiss实现异步，否则返回的_count是undefined
    db.creator_count({username: post.username}).then(function (result) {
        if (result > 0) {
            res.send('exist_creator');
        }
        else {
            dbUser.user_search({username: post.username}).then(function (result) {
                if (result.length == 0) {
                    res.send('not_exist_user');
                }
                else {
                    var temp = {
                        username: result[0].username,
                        password: result[0].password,
                        email: result[0].email,
                        regist_date: post.regist_date
                    };
                    db.creator_save(temp);
                    res.send('success');
                }
            });
        }
    });
    
});

module.exports = router;
