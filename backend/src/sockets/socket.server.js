const { Server } = require("socket.io");



const initSocketServer = (httpServer) => {
    const io = new Server(httpServer, {});

    io.use((socket, next) => {
        
    })

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });

    })
        
}

module.exports = initSocketServer;