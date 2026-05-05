// Implement static login implementation with property drilling. (C)
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

function StaticLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (username, password) => {
        // Static credentials
        const validUsername = 'admin';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <h2>Welcome, { 'admin' }!</h2>
            ) : (
                <div>
                    <h1>Login</h1>
                    <LoginForm onLogin={handleLogin} />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}
        </div>
    );
}

export default StaticLogin;