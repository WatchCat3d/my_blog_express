var mongoose = require('mongoose');

var blogs_schema = mongoose.Schema({
    title: String,
    content: String,
    writer: String,
    blog_date: String
});

var url = "mongodb://localhost:27017/blogs";

var connect = mongoose.createConnection(url);

var Blog = connect.model('Blog', blogs_schema);

module.exports = Blog;