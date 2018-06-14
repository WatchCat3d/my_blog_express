var mongoose = require('mongoose');

var creators_schema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    regist_date: String
});




var url = "mongodb://localhost:27017/creators";

var connect = mongoose.createConnection(url);

var Creator = connect.model('Creator', creators_schema);

module.exports = Creator;