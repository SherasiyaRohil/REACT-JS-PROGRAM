// Show a quote in italic with comfortable reading line-height. (B)
import React from 'react'

function Quote() {
    const quoteStyle = {
        fontStyle: 'italic',
        lineHeight: '1.6',
        margin: '20px',
        fontSize: '18px',
    };

    return (
        <div style={quoteStyle}>
            "The only way to do great work is to love what you do." - Steve Jobs
        </div>
    );
}

export default Quote;