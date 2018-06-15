var mongoose = require('mongoose');
var Creator = require('./Creator_model');


module.exports = {
    creator_save: function (creator) {


        new Creator({
            username: creator.username,
            password: creator.password,
            email: creator.email,
            regist_date: creator.regist_date
        }).save(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });

    },
    creator_count: function (pattem) { //用promiss实现异步，否则返回的creator_count是undefined
        return new Promise(function (resolve, reject) {

            
            Creator.count(pattem, function (err, res) {
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
    creator_search: function (pattem) {  //用promiss实现异步，否则返回的creator_count是undefined
        return new Promise(function (resolve, reject) {


            Creator.find(pattem, function (err, res) {
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
    creator_delete: function (pattem) {
        return new Promise(function (resolve, reject) {
            Creator.remove(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个用户已删除");
                    resolve(res);
                }
            });
        });
    }
};
