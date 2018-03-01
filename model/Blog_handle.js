var mongoose = require('mongoose');
var Blog = require('./Blog_model');

module.exports = {
    blog_save: function (blog) {

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

        Blog.remove(pattem, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    },
    blog_update: function (pattem, post) {
        return new Promise(function (resolve, reject) {
            Blog.update(pattem, post, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    resolve(res);
                }
            });
        });
    }

};