// main.js

const makeApiRequest = require('./apiCaller');

function callback(response) {
    // Burada response işlemlerini gerçekleştirin
    // Örneğin, response'ı yazdırabilirsiniz:
    response.on('data', function (chunk) {
        console.log(chunk);
    });
}

// API isteği yap
makeApiRequest(callback);
