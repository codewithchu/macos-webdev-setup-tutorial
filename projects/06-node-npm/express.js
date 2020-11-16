const express = require('express');
const app = express();
const port = 3001;

//http:localhost:3001
app.get('/', (req, res) => {
	res.send('Hello EXPRESS Coders!');
});

app.listen(port, () => {
	console.log(`Express on port ${port}`);
});
