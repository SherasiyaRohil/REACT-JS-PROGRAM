// implemen button Transform Scale on Hover. (B)
import React from 'react'

function Transform() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <button class="bg-amber-500 text-blue-700 font-bold py-2 px-4 rounded transform hover:scale-110 hover:active:rotate-z-90 transition-transform duration-300 ease-in-out">
                Hover to Scale
            </button>
        </div>
      
    </div>
  )
}

export default Transform
