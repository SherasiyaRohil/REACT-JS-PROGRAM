import React, { useState } from "react";

function Text() {
    const [showText, setShowText] = useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={() => setShowText(true)} style={{ backgroundColor: 'blue', fontSize: '30px', marginBottom: '20px' }}>
                Hide Text
            </button>

            {showText && <h2 style={{ fontSize: '30px',color:'red'}}>This text will be hidden</h2>}
        </div>
    );
}

export default Text;
