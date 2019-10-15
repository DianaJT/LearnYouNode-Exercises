'use strict'

const fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);

var splitArray = buff.toString().split('\n');

console.log(splitArray.length - 1);
