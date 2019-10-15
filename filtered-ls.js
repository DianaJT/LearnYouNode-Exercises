'use strict'

const fs = require('fs');
const path = require('path')

fs.readdir(process.argv[2], function callback (err, list){
    if (err) {
        return console.error(err);
    }

    list.forEach (function (item) {
        if (path.extname(item) === '.' + process.argv[3]) {
            console.log(item);
        }
    })

})
