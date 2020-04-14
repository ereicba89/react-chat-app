const express = require('express')
const socketio = require('socket.io')
const http = require('http')

//importando el modulo de usuarios
const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js')

//           para deployado
const PORT = process.env.PORT || 5000

//importamos el router
const router = require('./router')


const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', (socket) => {
    console.log('Tenemos una nueva conexion')

    socket.on('ingresando', ({name, room}, callback) => {
        const { error, user } = addUser({id: socket.id, name, room})
        if(error){
            return callback(error)
        }
        socket.emit('mensaje', { user: 'admin', text: `${user.name}, bienvenido a la sala ${user.room}`})
        socket.broadcast.to(user.room).emit('mensaje', { user: 'admin', text: `${user.name} ha ingresado`})

        socket.join(user.room);

        callback()
    })

    socket.on('enviarMensaje', (mensaje, callback) => {
        const user = getUser(socket.id);
        console.log(user);

        io.to(user.room).emit('mensaje', {user: user.name, text: mensaje})

        callback()
    })

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