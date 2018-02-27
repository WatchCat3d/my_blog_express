var mongoose = require('mongoose');
var User = require('./User_model');


module.exports = {
    user_save: function (user) {


        new User({
            username: user.username,
            password: user.password,
            email: user.email,
            regist_date: user.regist_date
        }).save(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });

    },
    user_count: function (pattem) { //用promiss实现异步，否则返回的user_count是undefined
        return new Promise(function (resolve, reject) {

            
            User.count(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });         
        });
    },
    user_search: function (pattem) {  //用promiss实现异步，否则返回的user_count是undefined
        return new Promise(function (resolve, reject) {


            User.find(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            }); 
        });
    },
    user_delete: function (pattem) {

        User.remove(pattem, function (err, res) {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                console.log(res);
                return res;
            }
        });
    }
};
