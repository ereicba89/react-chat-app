import React from 'react';

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

import './NavBar.component.scss'

const NavBar = ({ room }) => {
    return (
        <div className="navBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online imagen" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/" className=""><img src={closeIcon} alt="close imagen" /></a>
            </div>
        </div>
    );
};

export default NavBar;