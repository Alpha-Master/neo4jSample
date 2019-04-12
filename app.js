var express = require('express');
var request = require('request');
var app = express();
var http = require('http');
var port = 8007;
const applicantRoute = require('./routes'); 
var txUrl = "http://localhost:7474/db/data/transaction/commit";
 

app.use('/',applicantRoute);
 
var doDatabaseOperation = function (query, params) {
	return new Promise(function (resolve, reject) {
		request.post({
			uri:txUrl,
			headers:{
				"Authorization":"Basic bmVvNGo6cm9vdA=="
			},
			json:{
				statements:[
					{
						statement:query,
						parameters:params
					}
				]
			}
		},
	    function(err,res){
	    	if(err)
	    		reject(err)
            else
                console.log(JSON.stringify(res.body))
		    	resolve(res.body)
	    })
	});	
}
 


var server = http.createServer(app);
server.listen(port);
server.on('error', function () {
	console.log("Server error");
});
server.on('listening', function () {
	console.log("listening to port "+port);
});
