'use strict'

var fs = require('fs');
var home = require('os').homedir();
var dir = home + "/dem-rescript/__tests__/resources/";
var contents = fs.readFileSync(dir + "index.json", 'utf8');
let data = JSON.parse(contents);

module.exports = data;
