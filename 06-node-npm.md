# Setup Node and NPM

nodejs docs<br />
https://nodejs.org/dist/latest-v14.x/docs/api/

https://www.npmjs.com/<br />
npm will manage your project's node packages for you.

## Check Version

```sh
node -v && npm -v
```

## List Packages

Check what packages you have installed globally or within your project.

```sh
npm list -g --depth=0 2>/dev/null
npm list --depth=0 2>/dev/null
```

## npm install global packages

We'll install some global npm packages.

```sh
# tools
npm install -g serve
npm install -g typescript
npm install -g eslint
```

### Create a Project Folder

```sh
mkdir cwc-macdevsetup
cd cwc-macdevsetup
```

## Create a sandbox

We'll use this to test out node.

```sh
touch sandbox.js
```

### sandbox.js

```js
let x = 1;
let y = 10;
let z = '1';

console.log('x + y', x + y);
console.log('x == z', x == z);
console.log('x === z', x === z);
```

run sandbox

```sh
node sandbox.js
```

## http module

Using the http module to serve up a page.

### index.js

```sh
touch index.js
```

index.js

```js
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
```

run our index

```sh
node index.js
```

## Express App

Setup a our first express App.

### Install Express

Express is a node application framework

```sh
npm init -y
npm install express
touch express.js
```

### express.js

```js
const express = require('express');
const app = express();
const port = 3001;

//http:localhost:3001
app.get('/', (req, res) => {
	res.send('Hello EXPRESS Coders!');
});

app.listen(port, () => {
	console.log(`Express App on port ${port}`);
});
```

run our express app

```sh
node express.js
```

## Table of Content

- [Install Applications](02-install-and-setup.md)
- [Rectangles](03-rectangles.md)
- [Terminal & zsh](04-setup-terminal-zsh.md)
- [VS Code](05-vscode.md)
- [Node & NPM](06-node-npm.md)
- [SSH](07-ssh.md)
- [Git & GitHub](08-git-setup.md)
- [Browsers](09-browsers.md)
- [Figma](10-figma.md)
