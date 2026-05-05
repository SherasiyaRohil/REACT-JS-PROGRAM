// Create a centered blog title with a subtitle below it. (A)
import React from 'react';

function Title() {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>My Awesome Blog</h1>
            <h3>Your daily dose of tech and life</h3>
        </div>
    );
}

export default Title;