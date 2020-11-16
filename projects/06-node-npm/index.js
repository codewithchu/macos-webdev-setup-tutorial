const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
	//http:localhost:3000
	if (req.url === '/') {
		res.write('Hello Coders!');
		res.end();
	}
	//http:localhost:3000/about
	if (req.url === '/about') {
		res.write('About Coders');
		res.end();
	}

	//http:localhost:3000/api/data
	if (req.url === '/api/data') {
		res.write(JSON.stringify([1, 'two', 'three', 4]));
		res.end();
	}
});

server.listen(port);
console.log(`Listening on port ${port}`);
