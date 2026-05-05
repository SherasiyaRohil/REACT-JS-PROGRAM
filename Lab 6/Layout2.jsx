import React from 'react'

function Layout2() {
    return (
        <div className='border-2 flex h-screen flex-col'>
            <div className='bg-amber-50 text-black text-4xl w-full text-start p-5'>free css layout</div>
            <div className='grid grid-cols-4'>
                <div className='bg-amber-200 h-30 w-50 p-5 border-2'>
                    <h1>Navigation here</h1>
                    <h2>Navigation here</h2>
                    <h3>Navigation here</h3>
                </div>

                 <div className='flex-row w-full col-span-2'>
                    <h1 className='text-start text-2xl'>content here</h1>
                    <p className='text-start pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.</p>
                    <p className='text-start pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.</p>
                    <p className='text-start pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.</p>
                    <p className='text-start pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.</p>
                    <p className='text-start pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.</p>
                </div>
                 <div className='bg-amber-200 h-70 w-50  ml-26 border-2'>
                    <h1 className='text-2xl pb-4'>more stuf here</h1>
                    <p className='text-start'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis exercitationem iste est numquam eum id fugiat quibusdam pariatur ullam natus quos sint aut cupiditate minima delectus in corporis! Explicabo.
                    </p>
                </div>

                
            </div>

            <div className='bg-amber-100 text-black text-2xl w-full text-center p-5 mt-auto'>footer area</div>
           



        </div>
    )
}

export default Layout2
