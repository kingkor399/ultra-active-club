import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <nav className="header">
            <img src={logo}></img>
            <div>
                <h2>Fab & Fit & Fun.</h2>
            </div>
        </nav>   
    );
};

export default Header;