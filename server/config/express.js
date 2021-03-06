var express = require('express');
var app = express();
var path = require('path');

app.set('clientPath', path.join(__dirname, '../..'));
app.use(express.static(app.get('clientPath')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;