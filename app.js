import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://real-time-chatting-dusky.vercel.app/",
    }
}
);

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("message", (msg) => {
        io.emit("sent message for all users", { message: msg, id: socket.id });
    });
    socket.on("typing", (name) => {
        socket.broadcast.emit("show_typing_status", name);
    })
    socket.on("stop_typing", (name) => {
        socket.broadcast.emit("stop_typing_status", name);
    })

    socket.on("voice", (audioData) => {
        socket.broadcast.emit("voice", audioData);
    });
})

server.listen(3000, () => {
    console.log("listening on port 3000");
});
