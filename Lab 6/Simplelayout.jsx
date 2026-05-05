import React from 'react'

function Simplelayout() {
  return (
    <>
    <div className='border border-gray-400 h-screen w-full flex'   >
        <div className='bg-gray-950 w-100 h-full'>
            <h1 className='text-white text-3xl pt-40'>SideBar</h1>
            <h2 className='text-white text-2xl pt-10'>Dashbord</h2>
            <h3 className='text-white text-2xl pt-10 '>Seting</h3>
            <h4 className='text-white text-2xl pt-10'>Logout</h4>
        </div>
        <div className='w-full flex justify-center grid grid-flow-row bg-amber-100'>
          
           <div className='text-black mt-auto text-8xl'>Main Conent</div>

           <div className='text-black text-3xl pt-5 text-start'>this is your main layou area</div>
          
        </div>
    </div>
    </>
  )
}

export default Simplelayout
