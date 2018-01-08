var ApiKey = '';

exports.setApikey = function(apikey) {
	ApiKey = apikey;
}

exports.isEmailValid = function(emailAddress,callback) {

	//var result = '';

	var request = require("request");

	var options = { method: 'POST',
	  url: 'https://api.cloudmersive.com/validate/email/address/full',
	  headers: 
	   { 'postman-token': 'b5ba6557-c339-dae5-8263-c80110a5c1ec',
	     'cache-control': 'no-cache',
	     apikey: ApiKey },
	  form: { '': emailAddress } };
	
	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	
		callback(body);
	
	  //console.log(body);
	});

	

}