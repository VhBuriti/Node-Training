const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream(__dirname + '/greet.txt');

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

const compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

const gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);
