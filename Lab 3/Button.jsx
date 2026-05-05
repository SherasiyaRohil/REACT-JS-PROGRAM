// Make a card with a heading, paragraph, and button — make them visually
// spaced properly. (A)
import React from 'react';

function Button() {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '300px',
            margin: '20px auto',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2 style={{ marginBottom: '10px' }}>Card Title</h2>
            <p style={{ marginBottom: '20px' }}>
                This is a simple card component with a heading, paragraph, and button.
            </p>
            <button style={{
                padding: '10px 15px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                Click Me
            </button>
        </div>
    );
}

export default Button;