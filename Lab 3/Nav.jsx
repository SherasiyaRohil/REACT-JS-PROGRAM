// Create simple nav links with equal spacing. (B)
import React from 'react';

function Nav() {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#f0f0f0',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
    };

    return (
        <nav style={navStyle}>
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#contact" style={linkStyle}>Contact</a>
        </nav>
    );
}

export default Nav;