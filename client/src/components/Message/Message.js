import React from 'react';

import './Message.component.scss'

const Message = ({ mensaje: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser ? (
            <div className="menssageContainer justifyEnd">
                <p className="sentText pr-10">
                    {trimmedName}
                </p>
                <div className="menssageBox backgroundBlue">
                    <p className="messageText colorWhite">
                        {text}
                    </p>
                </div>
            </div>
        ) : (
                <div className="menssageContainer">
                    <p className="messageText colorDark">
                        {text}
                    </p>
                    <div className="menssageBox backgroundLight">
                        <p className="sentText pl-10">
                            {trimmedName}
                        </p>
                    </div>
                </div>
            )
    )
};

export default Message;