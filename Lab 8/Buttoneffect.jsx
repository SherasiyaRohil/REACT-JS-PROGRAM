// Implement button with press effect. (B)
import React from 'react'

function Buttoneffect() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <button class="bg-green-500 text-white font-bold py-2 px-4 rounded transform hover:scale-110 active:scale-90 transition-transform duration-300 ease-in-out">
                Press Me
            </button>
        </div>
      
    </div>
  )
}

export default Buttoneffect