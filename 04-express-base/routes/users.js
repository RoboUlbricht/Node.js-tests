var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
  	title: 'Express Arduino Slovakia Users',
  	users: ['Milan', 'Peter', 'Erik']
  });
});

module.exports = router;
