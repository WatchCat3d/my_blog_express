var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index");
  res.redirect("http://localhost:3000/#/blog_list_page");
});

module.exports = router;
