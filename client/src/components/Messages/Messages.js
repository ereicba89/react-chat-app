import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom'

import Message from '../Message/Message.js'

import './Messages.component.scss'

const Messages = ({ mensajes, name }) => (
    <ScrollToBottom>
        {mensajes.map((mensaje, i) => <div key={i}>
            <Message mensaje={mensaje} name={name} />
        </div>)}
    </ScrollToBottom>
);

export default Messages;