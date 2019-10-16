'use strict'

const mymodule = require('./mymodule.js');

const directoryName = process.argv[2];
const extensionWithoutDot = process.argv[3];

mymodule(directoryName, extensionWithoutDot, function (err, list) {
    if (err) return console.error(err);

    list.forEach(function(item) {
        console.log(item);
    })

});
