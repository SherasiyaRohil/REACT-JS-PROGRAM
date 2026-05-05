// Create a glass-e`ect card on top of a colorful background. (B)
import React from 'react'

function Pro3() {
    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'>
            <div className='bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-10 shadow-lg max-w-sm text-center'>
                <h1 className='text-amber-300 text-4xl font-bold mb-4'>Glass Effect Card</h1>
                <p className='text-blue-400 text-lg'>This card uses a glass effect with a colorful gradient background.</p>
            </div>
        </div>
    )
}

export default Pro3