var ApiKey = '';

exports.setApikey = function(apikey) {
	ApiKey = apikey;
}

exports.isEmailValid = function(emailAddress,callback) {

	var request = require("request");

	var options = { method: 'POST',
	  url: 'https://api.cloudmersive.com/validate/email/address/full',
	  headers: 
	   { 
	     'cache-control': 'no-cache',
	     apikey: ApiKey,
	     'content-type': 'application/x-www-form-urlencoded' },
	  form: { '': emailAddress } };
	
	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	
		// Done
		callback(JSON.parse(body));
		
	});

	

}