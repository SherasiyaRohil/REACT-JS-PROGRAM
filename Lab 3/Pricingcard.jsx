// Create a pricing card with a price highlighted using larger text. (A)
import React from 'react';

function PricingCard() {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            width: '250px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <h2>Basic Plan</h2>
            <p style={{ fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>$19.99/month</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>10 Projects</li>
                <li>5 GB Storage</li>
                <li>Email Support</li>
            </ul>
            <button style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Choose Plan
            </button>
        </div>
    );
}

export default PricingCard;