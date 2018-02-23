var mongoose = require('mongoose');
var User = require('./User_model');

var url = "mongodb://localhost:27017/users";

module.exports = {
    db_connect: function () {         
        mongoose.connect(url, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("数据库已连接");
            }
        });
    }
};
