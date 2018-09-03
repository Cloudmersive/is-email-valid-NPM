# is-email-valid-NPM
NodeJS NPM library for determining if an email address is fully valid.  This is much deeper than simply checking if the text string looks like an email address.  is-email-valid-full will do all of the following:

- Check if the email address is valid syntactically
- Contact the mail server and verify the existence of the account, without actually sending any email

This ensures that the email addresses that you capture are real and will not bounce.

## Get Started

1. Install is-email-valid-full NPM package:

```
npm install is-email-valid-full
```

2. Get a [free tier no-expiration API Key from Cloudmersive](https://account.cloudmersive.com/signup), which includes 50,000 calls per month.

3. Call the API.  Here is an example on how to get started:

```javascript
'use strict';

var isEmail = require('is-email-valid-full');

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    isEmail.setApikey('PUT_YOUR_API_KEY_HERE');

    var result = isEmail.isEmailValid('support@cloudmersive.com', function (output) {
        res.end(output.ValidAddress.toString());
    });

    
}).listen(port);
```
