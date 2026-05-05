// Create a button that changes color and slightly scales up on hover. (A)
import React from 'react'

function Pr1() {
    return (
        <>
        <div className='h-screen flex justify-center items-center bg-gray-300'>
            <button className='bg-blue-500 hover:bg-red-500 hover:scale-205 size-30 hover:border-4 border-black border rounded-xl text-3xl text-shadow-black'>click me</button>

        </div>
        
        </>
    
  )
}

export default Pr1
