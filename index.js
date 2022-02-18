const express = require('express'),
	http = require('http'),
	app = express(),
	server = http.Server(app),
	io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

server.listen(8080);