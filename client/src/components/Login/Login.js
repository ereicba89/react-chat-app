import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Login.component.scss'
import Input from '@material-ui/core/Input';


const Login = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="loginOuterContainer">
            <div className="loginInnerContainer">
                <h1 className="heading">React Chat</h1>
                <div>
                    <Input placeholder="Nombre" className="loginInput" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <Input placeholder="Sala" className="loginInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !room ) ? event.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Ingresar</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;