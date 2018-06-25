var mongoose = require('mongoose');

var drafts_schema = mongoose.Schema({
    title: String,
    content: String,
    writer: String,
    draft_date: String
});

var url = "mongodb://localhost:27017/drafts";

var connect = mongoose.createConnection(url);

var Draft = connect.model('Draft', drafts_schema);

module.exports = Draft;