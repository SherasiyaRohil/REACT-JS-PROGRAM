// Write a program which focuses a specific input text which clicked on a button.
// (A)

import React, { useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Focus me!" ref={inputRef} />
            <button className='text-blue-400' onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default FocusInput
