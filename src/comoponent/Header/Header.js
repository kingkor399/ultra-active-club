import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <nav className="header">
            <img src={logo}></img>
            <div>
                <h2>My Daily Activity</h2>
            </div>
        </nav>   
    );
};

export default Header;