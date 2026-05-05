// Create a card with a background image and white text overlay. (A)
import React from 'react'

function Pro2() {
    return (
        <div className='h-screen flex justify-center items-center bg-[url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80")] bg-cover bg-center'>
            <div className='text-4xl bg-opacity-50 p-10 rounded-lg'>
                <h1 className='text-white text-4xl font-bold mb-4'>Card Title</h1>
                <p className='text-white text-lg'>This is a sample card with a background image and white text overlay.</p>
            </div>
        </div>
    )
}

export default Pro2