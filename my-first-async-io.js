'use strict'

const fs = require('fs');

fs.readFile(process.argv[2], function callback (err, data) {
    if (err) {
        return console.log(err)
    }

    const splitArray = data.toString().split('\n');
    console.log(splitArray.length - 1);
});
