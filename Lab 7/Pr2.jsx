// Make a hidden text fade in when card is hovered. (A)
import React from 'react'

function Pr2() {
    return (
        <>
        <div className='h-screen flex justify-center items-center bg-gray-300'>
            <div className='bg-blue-300 w-100 h-70 rounded-xl shadow-2xs pt-15 justify-center items-center hover:bg-emerald-300 group border-4 '>
                <h1 className='text-2xl font-bold mb-4 '>Hover card</h1>
                <p>Make a hidden text fade in when card is hovered and card hover than show shadow...</p>
                <p className='invisible  group-hover:visible  text-4xl px-4 pt-8 text-orange-700'>Hello i am here!</p>
            </div>

        </div>
        
        </>
    
  )
}

export default Pr2