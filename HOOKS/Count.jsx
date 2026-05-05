import React from 'react'
import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    return (
        <>
            
                <h1 style={{border:'40px',backgroundColor:'lightblue',marginLeft:'70px'}}>Count:{count}</h1>
                 <button onClick={() => { setCount(count - 1) }} style={{backgroundColor:'green', padding: '10px', margin: '5px', paddingTop:`30px`, marginTop:`30px`}}>Decrement -</button>
                <button onClick={() => { setCount(count + 1) }} style={{ backgroundColor: 'red', padding: '10px', margin: '5px', gap: '5px',paddingTop:`30px` }}>Increment +</button>
               


        </>

    )

}

export default Count
