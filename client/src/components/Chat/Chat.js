import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client'

import NavBar from '../NavBar/NavBar'
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.component.scss'

let socket;


const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);

    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        console.log(name, room);

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room);

        console.log(socket);

        socket.emit('ingresando', { name, room }, (error) => {
            if(error) {
                alert(error);
              }
        })

        //util para desconectar
        return () => {
            socket.emit('disconnect');
            //terminar la instancia de la conexion del chat
            socket.off();
        }
    }, [ENDPOINT, location.search])

    //use effect para manejo de mensajes
    useEffect(() => {
        socket.on('mensaje', (mensaje) => {
            setMensajes([...mensajes, mensaje])
        })
    }, [mensajes])

    //funcion para enviar mensajes
    const enviarMensaje = (event) => {
        //para que no se refresque la pagina
        event.preventDefault();

        if(mensaje) {
            socket.emit('enviarMensaje', mensaje, () => setMensaje(''))
        }
    }

    console.log(mensaje, mensajes);

    return (
        <div className="outerContainer">
            <div className="container">
                <NavBar room={room} />
                <Messages mensajes={mensajes} name={name}/>
                <Input mensaje={mensaje} setMensaje={setMensaje} enviarMensaje={enviarMensaje} /> 
            </div>
        </div>
    );
};

export default Chat;