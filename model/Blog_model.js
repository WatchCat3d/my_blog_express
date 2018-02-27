var mongoose = require('mongoose');

var blogs_schema = mongoose.Schema({
    title: String,
    content: String,
    writer: String,
    blog_date: String
});

var Blog = mongoose.model('Blog', blogs_schema);

module.exports = Blog;