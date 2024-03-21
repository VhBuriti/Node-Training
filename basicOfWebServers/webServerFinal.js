/* 
    This Final file uses basic routing
*/

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        let message = 'Hello World from server!';
        html = html.replace('{Message}', message);
        res.end(html);
    } 
    else if (req.url === 'api') {
        res.writeHead(200, { 
            'Content-Type': 'application/json' 
        });
        let obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1')
