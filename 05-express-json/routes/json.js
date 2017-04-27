var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Arduino Slovakia JSON', hodnota: 25 });
});

module.exports = router;
