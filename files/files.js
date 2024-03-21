const fs = require("fs");


// Normal
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


// Async
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');