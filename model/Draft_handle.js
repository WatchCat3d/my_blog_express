var mongoose = require('mongoose');
var Draft = require('./Draft_model');//19

module.exports = {
    draft_save: function (draft) {
        return new Promise(function (resolve, reject) {
            new Draft({
                title: draft.title,
                content: draft.content,
                writer: draft.writer,
                draft_date: draft.draft_date
            }).save(function (err, res) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                    resolve(res);
                }
            });
        });
    },
    draft_search: function (pattem) {
        return new Promise(function (resolve, reject) {

            Draft.find(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个草稿已查找到");
                    resolve(res);
                }
            });
        });
    },
    draft_count: function (pattem) {
        return new Promise(function (resolve, reject) {
            Draft.count(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res + "个草稿");
                    resolve(res);
                }
            });
        });
    },
    draft_delete: function (pattem) {
        return new Promise(function (resolve, reject) {
            Draft.remove(pattem, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log("1个草稿已删除");
                    resolve(res);
                }
            });
        });
    },
    draft_update: function (pattem, post) {
        return new Promise(function (resolve, reject) {
            Draft.update(pattem, post, function (err, res) {
                if (err) {
                    console.log(err);
                    return false;
                }
                else {
                    console.log(res.length + "个草稿已更新");
                    resolve(res);
                }
            });
        });
    }

};