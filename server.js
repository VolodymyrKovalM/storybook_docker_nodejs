const express = require('express');
const path = require('path');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static('.out'));

app.get('/', (req, res) => {
	res.sendFile(path.join(`${__dirname}/.out/index.html`));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
