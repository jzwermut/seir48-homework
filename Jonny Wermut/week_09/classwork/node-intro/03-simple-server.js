// This is a simple HTTP web server in Node with just the standard library.

const http = require('http');

http.createServer((req, res) => {
	res.end('Hello World')
}).listen(1337) //Port to listen 

console.log('Server started at http://localhost:1337')