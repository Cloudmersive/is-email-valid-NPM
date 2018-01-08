# is-email-valid-NPM
NodeJS NPM library for determining if an email address is fully valid.

## Get Started

1. Install is-email-valid-full NPM package:

```
npm install is-email-valid-full
```

2. Get a free API Key from Cloudmersive, which includes 50,000 calls per month.

3. Call the API.  Here is an example on how to get started:

```javascript
'use strict';

var isEmail = require('is-email-valid-full');

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    isEmail.setApikey('PUT_YOUR_API_KEY_HERE');

    var result = isEmail.isEmailValid('bragac2@msn.com', function (output) {
        res.end(output.ValidAddress.toString());
    });

    
}).listen(port);
```
