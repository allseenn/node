var fs = require('fs');
var buffer = fs.readFileSync('file');
console.log(buffer.toString().split('\n').length-1);
