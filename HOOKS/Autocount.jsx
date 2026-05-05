import React from 'react'
import { useState,useEffect } from 'react'

function Autocount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev + 1));


        }, 1000);
        return () => clearInterval(interval);
    });


    return (
        <>
            <h1 style={{color:'red'}}>count:{count}</h1>
        </>
    )
}

export default Autocount
