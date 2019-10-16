'use strict'

const http = require('http');

var finalString = '';

http.get(process.argv[2], function (response) {
    response.on('data', function(data) {
        finalString += data.toString();
    })
    response.on('error', function (err) {
        console.error(err);
    })
    response.on('end', function () {
        console.log(finalString.length);
        console.log(finalString);
    })
})

