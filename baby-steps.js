'use strict'

var argumentSum = 0;

for (var i = 2; i < process.argv.length; i++) {
    argumentSum += Number(process.argv[i]);
}

console.log(argumentSum);