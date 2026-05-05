// Write a code which Compute fullName = firstName + lastName only when either
// of them is changed. (B)
import React, { useState, useMemo } from 'react';

function NameChanged() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = useMemo(() => {
        console.log('Computing full name...');
        return `${firstName} ${lastName}`;
    }, [firstName, lastName]);

    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <h2>Full Name: {fullName}</h2>
        </div>
    );
}

export default NameChanged;