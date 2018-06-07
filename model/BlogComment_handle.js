var mongoose = require('mongoose');
var BlogComment = require('./BlogComment_model');

module.exports = {
    blogComment_save: function (blogComment) {
        return new Promise(function (resolve, reject) {
            new BlogComment({
                blog_writer: blogComment.blog_writer,
                blog_date: blogComment.blog_date,
                content: blogComment.content,
                writer: blogComment.writer,
                date: blogComment.date
            }).save(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });
        })
    },
    blogComment_search: function (pattem) {
        return new Promise(function (resolve, reject) {

            BlogComment.find(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个评论已查找到");
                    resolve(res);
                }
            });
        });
    },
    blogComment_count: function (pattem) {
        return new Promise(function (resolve, reject) {
            BlogComment.count(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res + "个评论");
                    resolve(res);
                }
            });
        });
    },
    blogComment_delete: function (pattem) {

        BlogComment.remove(pattem, function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res.length + "个评论已删除");
            }
        });
    },
    blogComment_update: function (pattem, post) {
        return new Promise(function (resolve, reject) {
            BlogComment.update(pattem, post, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个评论已更新");
                    resolve(res);
                }
            });
        });
    }

};