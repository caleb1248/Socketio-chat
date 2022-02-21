const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const uuid = require('uuid');

app.get('/', (_req, res) => {
  res.redirect(uuid.v4());
});

app.get("/:room", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on('connection', socket => {
	socket.on('join', id => {
		socket.join(id);
		socket.on('message', message => {
			io.to(id).emit("message", message);
		});
	})
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});