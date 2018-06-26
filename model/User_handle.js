var mongoose = require('mongoose');
var User = require('./User_model');


module.exports = {
    user_save: function (user) {

        return new Promise(function (resolve, reject) {
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
                    resolve(res);
                }
            });
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
                    console.log(res + "个用户");
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
                    console.log(res.length + "个用户已查找到");
                    resolve(res);
                }
            }); 
        });
    },
    user_delete: function (pattem) {
        return new Promise(function (resolve, reject) {
            User.remove(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log("1个用户已删除");
                    resolve(res);
                }
            });
        });
    }
};
