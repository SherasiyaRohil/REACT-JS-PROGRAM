import React from 'react'


function ChildComponent() {
 
    return (
        <div>

            <button onClick={() => 
                console.log("Child component clicked! child here")}
            >Click Me</button>

        </div>
    )
}

export default ChildComponent
