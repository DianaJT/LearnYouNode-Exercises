'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function (directoryName, extensionWithoutDot, callbackFunction) {
    fs.readdir(directoryName, function (err, list) {
        if (err) return callbackFunction(err, []);

       
        list = list.filter( function (item) {
            return path.extname(item) === ('.' + extensionWithoutDot)
        })

        return callbackFunction(err, list);
    })

}