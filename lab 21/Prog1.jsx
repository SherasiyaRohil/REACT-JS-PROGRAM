// Build a login form using useState to store email and password. Display entered
// data on submit. (A)
import React, { useState } from 'react';

export default function Prog1() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ email, password });
    };

    return (
        <div style={{ padding: '20px',border:'1px solid black',width:'300px',margin:'auto',marginTop:'50px',backgroundColor:'lightgray' }}>
            <h1 style={{textAlign:'center'}}>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ marginTop: '10px',marginLeft:'100px',paddingTop:'10px'}}>
                    Submit
                </button>
            </form>
            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h4>Submitted Data:</h4>
                    <p>Email: {submittedData.email}</p>
                    <p>Password: {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}   
