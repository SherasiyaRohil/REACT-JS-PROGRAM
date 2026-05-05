import React, { createContext, useContext, useState } from "react";

// Create Context
const UserContext = createContext();

function UserPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <UserContext.Provider value={{ name, email }}>
            <div style={{ padding: "20px" }}>
                <h1>User Context with Input</h1>

                {/* Input Fields */}
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <ComponentA />
                <ComponentB />
            </div>
        </UserContext.Provider>
    );
}

// Component A
function ComponentA() {
    const { name } = useContext(UserContext);

    return (
        <div>
            <h2>Component A</h2>
            <p>Name: {name}</p>
        </div>
    );
}

// Component B
function ComponentB() {
    const { email } = useContext(UserContext);

    return (
        <div>
            <h2>Component B</h2>
            <p>Email: {email}</p>
        </div>
    );
}

export default UserPage;