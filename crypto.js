var readlineSync = require('readline-sync');
var crypto = require('crypto');

var pw, hash;

pw = readlineSync.question("Password: ");
hash = crypto.createHash('sha256').update(pw).digest("hex");

console.log( hash );