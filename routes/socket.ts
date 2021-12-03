import { Server } from "socket.io";

export default (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*"
        },
    });

    useSocketServer(io, { controllers: })

    return io;

};