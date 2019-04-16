var request = require('request');
var txUrl = "http://localhost:7474/db/data/transaction/commit";
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
		    	resolve(res.body)
	    })
	});	
}

exports.doDatabaseOperation = doDatabaseOperation
