require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const socket = new Server(server);

socket.on("connection", (io) => {
	io.on("disconnect", (sk) => {
		console.log(`${sk} disconnected`);
	});
	console.log(`${io} disconnected`);
});

const Application = app.listen(process.env.PORT || 9898, () =>
	console.log(`Server Listening on PORT:${process.env.PORT}`),
);

module.exports = Application;
