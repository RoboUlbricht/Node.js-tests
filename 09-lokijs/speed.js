'use strict';

var fs = require('fs');
var loki = require('lokijs');
var db = new loki('db/speed.json');

var users = db.addCollection('users');

var m1 = ['Odin','Thor','Loki','Erik','Bragi'];
var m2 = ['Midgard','Vanaheim','Helheim','Asgard','Jotunheim'];

fs.mkdir('db');

for(var i=0;i<1000000;i++)
  users.insert({
    name: m1[getRandomizer(0,4)],
    age: getRandomizer(25,60),
    address: m2[getRandomizer(0,4)]
});

db.saveDatabase();

function getRandomizer(bottom, top) {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}