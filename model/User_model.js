var mongoose = require('mongoose');

var users_schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    regist_date: String
});




var url = "mongodb://localhost:27017/users";

var connect = mongoose.createConnection(url);

var User = connect.model('User', users_schema);

module.exports = User;