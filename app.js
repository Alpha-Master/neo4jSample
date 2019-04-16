var express = require('express');
var app = express();
var http = require('http');
var port = 8007;
const applicantRoute = require('./routes'); 
 

app.use('/',applicantRoute);
 


var server = http.createServer(app);
server.listen(port);
server.on('error', function () {
	console.log("Server error");
});
server.on('listening', function () {
	console.log("listening to port "+port);
});
