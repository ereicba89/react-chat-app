const express = require('express')
const socketio = require('socket.io')
const http = require('http')

//           para deployado
const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//especificamos el puerto
server.listen(PORT, ()=>{
    console.log(`Server fue iniciado en el puerto ${PORT}`);
})