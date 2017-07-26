'use strict';

var loki = require('lokijs');
var db = new loki('db/example.json');

db.loadDatabase({}, function() {

  var users = db.getCollection('users');

  var results = users.find({ age: {'$gte': 35} });

  console.log(results);
});
