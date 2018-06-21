var mongoose = require('mongoose');
var Manager = require('./Manager_model');


module.exports = {
    manager_save: function (manager) {


        new Manager({
            username: manager.username,
            password: manager.password,
            email: manager.email,
            regist_date: manager.regist_date
        }).save(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });

    },
    manager_count: function (pattem) { //用promiss实现异步，否则返回的manager_count是undefined
        return new Promise(function (resolve, reject) {

            
            Manager.count(pattem, function (err, res) {
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
    manager_search: function (pattem) {  //用promiss实现异步，否则返回的manager_count是undefined
        return new Promise(function (resolve, reject) {


            Manager.find(pattem, function (err, res) {
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
    manager_delete: function (pattem) {
        return new Promise(function (resolve, reject) {

            Manager.remove(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个管理员已删除");
                    resolve(res);
                }
            });
        });
    }
};
