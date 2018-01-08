var ApiKey = '';

exports.setApikey = function(apikey) {
	ApiKey = apikey;
}

exports.isEmailValid = function(emailAddress,callback) {

	var qs = require("querystring");
	var http = require("https");
	
	var result = '';
	
	var options = {
	  "method": "POST",
	  "hostname": "api.cloudmersive.com",
	  "port": null,
	  "path": "/validate/email/address/full",
	  "headers": {
	    "content-type": "application/x-www-form-urlencoded",
	    "apikey": ApiKey,
	    "cache-control": "no-cache"
	  }
	};
	
	var req = http.request(options, function (res) {
	  var chunks = [];
	
	  res.on("data", function (chunk) {
	    chunks.push(chunk);
	  });
	
	  res.on("end", function () {
	    var body = Buffer.concat(chunks);
	    
	    if (callback != null)
	    {
	    	callback(body);
    	 }
	    
	    //result = body;
	    //console.log(body.toString());
	  });
	});
	
	req.write(qs.stringify({ '': emailAddress }));
	req.end();
	
	return result;


}