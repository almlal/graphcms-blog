// apiCaller.js

const https = require('https');

function makeApiRequest(callback) {
    var options = {
        host: 'localhost:3000'
    };

    // get
    https.get(options, callback);
}

module.exports = makeApiRequest;
