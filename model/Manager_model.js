var mongoose = require('mongoose');

var managers_schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    regist_date: String
});




var url = "mongodb://localhost:27017/managers";

var connect = mongoose.createConnection(url);

var Manager = connect.model('Manager', managers_schema);

module.exports = Manager;