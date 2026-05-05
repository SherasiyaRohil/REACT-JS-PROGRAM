// Create a hero banner with a left-to-right gradient background. (A)
import React from 'react'

function Gradient() {
    return (
        <div className='h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center'>
            <h1 className='text-white text-4xl font-bold'>Welcome to the Hero Banner</h1>
        </div>
    )
}

export default Gradient