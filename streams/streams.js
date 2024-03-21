/* 
    The concept of string is basically a sequence
    of pieces of data, which is broken into pieces
    that we call chunks
*/

const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
});