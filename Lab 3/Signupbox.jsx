// Create a Newsletter signup box with proper spacing. (B)
import React from 'react';

function Signupbox() {
    const boxStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        width: '300px',
        margin: '20px auto',
        borderRadius: '5px',
        textAlign: 'center',
    };

    const inputStyle = {
        width: '80%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '3px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '3px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
    };

    return (
        <div style={boxStyle}>
            <h2>Subscribe to our Newsletter</h2>
            <input type="email" placeholder="Enter your email" style={inputStyle} />
            <br />
            <button style={buttonStyle}>Subscribe</button>
        </div>
    );
}

export default Signupbox;