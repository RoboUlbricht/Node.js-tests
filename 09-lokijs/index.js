'use strict';

var fs = require('fs');
var loki = require('lokijs');
var db = new loki('db/example.json');

var users = db.addCollection('users');

var m1 = ['Odin','Thor','Loki','Erik','Bragi'];
var m2 = ['Midgard','Vanaheim','Helheim','Asgard','Jotunheim'];

fs.mkdir('db');

for(var i=0;i<10;i++)
  users.insert({
    name: m1[getRandomizer(0,4)],
    age: getRandomizer(25,60),
    address: m2[getRandomizer(0,4)]
});

var results = users.find({ age: {'$gte': 35} });

console.log(results);

db.saveDatabase();

function getRandomizer(bottom, top) {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}