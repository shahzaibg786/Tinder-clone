import React from 'react'
import './Header.css'
import user from '../images/user.svg';
import tinder from '../images/tinder.svg';
import chat from '../images/chat.svg';

const Header= props => {
    return (
        <div className="header">
            <button className = 'btn'>
            <img src={user} className="header" alt="user" />
            </button>
            <button className = 'btn'>
            <img src={tinder} className="header" alt="tinder" />
            </button>
            <button className = 'btn'>
            <img src={chat} className="header" alt="chat" />  
            </button>
            {/* <img src={user} className="header" alt="user" />
            <img src={tinder} className="header" alt="tinder" />
            <img src={chat} className="header" alt="chat" />                                                */}
        </div>
    )
}

export default Header;
