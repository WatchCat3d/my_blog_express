var mongoose = require('mongoose');

var users_schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    regist_date: String
});

var User = mongoose.model('User', users_schema);

module.exports = User;