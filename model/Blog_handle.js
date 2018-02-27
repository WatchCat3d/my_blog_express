var mongoose = require('mongoose');
var Blog = require('./Blog_model');

var url = "mongodb://localhost:27017/blogs";

function db_connect() {
    mongoose.connect(url, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("连接数据库");
        }
    });
}

module.exports = {
    blog_save: function (blog) {
        db_connect();

        new Blog({
            title: blog.title,
            content: blog.content,
            writer: blog.writer,
            blog_date: blog.blog_date
        }).save(function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    },
    blog_search: function (pattem) {
        return new Promise(function (resolve, reject) {
            db_connect();

            Blog.find(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    },
    blog_delete: function (pattem) {
        db_connect();

        Blog.remove(pattem, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    }

};