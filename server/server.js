var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(3000, function () {
    console.log('Serving: http://localhost:' + this.address().port);
});