const express = require('express')
const socketio = require('socket.io')
const http = require('http')

//           para deployado
const PORT = process.env.PORT || 5000

//importamos el router
const router = require('./router')


const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Tenemos una nueva conexion')

    socket.on('disconnect', () => {
        console.log('Se ha terminado la conexion');
    })
})

//lo importamos como un middleware
app.use(router)

//especificamos el puerto
server.listen(PORT, ()=>{
    console.log(`Server fue iniciado en el puerto ${PORT}`);
})