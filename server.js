// var express = require('express');
// express().use(express.static(__dirname)).listen(3000);

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);
