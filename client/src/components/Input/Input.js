import React from 'react';

import './Input.component.scss'

const Input = ({ mensaje, setMensaje, enviarMensaje}) => {
    return (
        <form action="" className="form">
            <input type="text" className="input" placeholder="mensaje" value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? enviarMensaje(event) : null} />

            <button className="sendButton" onClick={(event) => enviarMensaje(event)}>Enviar mensaje</button>
        </form>
    );
};

export default Input;