'use strict'

const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]]

var strings = [[], [], []];

var counter = 0;

urls.forEach( function (url, index) {
    http.get(url, function(response) {

        response.on('error', function (err) {
            console.error(err);
        })

        response.on('data', function (data) {
            strings[index] += data.toString();
        })

        response.on('end', function () {
            counter++;
            if (counter === 3) {
                strings.forEach(function (item) {
                    console.log(item);
                })
            }
        })
    })
})