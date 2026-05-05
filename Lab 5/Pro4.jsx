// Create an image that becomes blurred when hovered. (A)
import React from 'react'

function Pro4() {
    return (

        <div className='h-screen flex justify-center items-center bg-cyan-300'>

            <img
                src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                alt='Sample'
                className='w-106 h-84 object-cover rounded-lg transition-transform duration-300 hover:blur-sm'
            />
            
        </div>
        
    )
}

export default Pro4