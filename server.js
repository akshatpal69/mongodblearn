const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	// res.send("hello from Akshat")
    res.sendFile(__dirname+'/public/index.html')
})

/**write your code from here */

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})