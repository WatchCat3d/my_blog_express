var mongoose = require('mongoose');

var blogComments_schema = mongoose.Schema({
    blog_writer: String,
    blog_date: String,
    content: String,
    writer: String,
    date: String
});

var url = "mongodb://localhost:27017/blogComments";

var connect = mongoose.createConnection(url);

var BlogComment = connect.model('BlogComment', blogComments_schema);

module.exports = BlogComment;