var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<script>alert(1);</script>');
});

module.exports = router;
