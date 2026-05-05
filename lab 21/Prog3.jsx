// Create a UserContext that stores name & email. Display data in multiple
// components. (A)
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export default function Prog3() {
    const [user, setUser] = useState({ name: 'abc', email: 'abc@gmail.com' });
    const[password,setPassword]=useState('123456');

    return (
        <UserContext.Provider value={{ user, password }}>
            <div style={{ padding: '20px',border:'1px solid black',width:'300px',margin:'auto',marginTop:'50px',backgroundColor:'lightgray' }}>
                <h1 style={{textAlign:'center'}}>User Information</h1>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Password: {password}</p>
            </div>
        </UserContext.Provider>
    );
}
