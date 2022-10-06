import dotenv from 'dotenv';
import Server from './config/server';
import http from 'http';
import  { Server as ioServer } from 'socket.io';


dotenv.config();
const server = new Server;


const app = http.createServer(server.app);
const io = new ioServer(app);
io.on('connection', (socket) => {
    const username = socket.handshake.query.username
    
    console.log('conexion establecida')
    // ...
})
app.listen();
