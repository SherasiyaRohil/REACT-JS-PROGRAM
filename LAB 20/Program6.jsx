import React, { useState } from "react";

function Program6() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setMessage(`Form submitted successfully! Hello : ${name}`);
        setName(""); 
    };
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Simple Form Submission</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{" "}
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" style={{ marginLeft: "10px" }}>
                    Submit
                </button>
            </form>

            {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
        </div>
    );
}

export default Program6;
