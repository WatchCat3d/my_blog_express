var mongoose = require('mongoose');
var User = require('./User_model');

var url = "mongodb://localhost:27017/users";

function db_connect() {
    mongoose.connect(url, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("数据库已连接");
        }
    });
}

module.exports = {
    user_save: function (user) {
        db_connect();

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
    user_count: function (pattem) {
        db_connect();
        
        User.count(pattem, function (err, res) {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                console.log(res);
                return res;
            }
        });
    },
    user_search: function (pattem) {
        db_connect();

        User.find(pattem, function (err, res) {
            if (err) {
                console.log(err);
                return false;
            }
            else {
                console.log(res);
                return res;
            }
        });
    },
    user_delete: function (pattem) {
        db_connect();
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
