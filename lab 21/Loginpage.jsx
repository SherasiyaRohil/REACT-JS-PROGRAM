import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext();

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (username, password) => {
        
        if (username === "admin" && password === "1234") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid Username or Password");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1> Context API page here</h1>
                {isLoggedIn ? <Dashboard /> : <LoginForm />}
            </div>
        </AuthContext.Provider>
    );
}


function LoginForm() {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />

            <button type="submit">Login</button>
        </form>
    );
}


function Dashboard() {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Welcome to Dashboard </h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default LoginPage;