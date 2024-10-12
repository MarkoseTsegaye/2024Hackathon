import React from 'react'

const BottomNav = () => {
  return (
    <div className="sm:hidden w-full place-self-end drop-shadow-2xl bg-white p-4 h-[10%] flex flex-row justify-around instrument-sans-regular">
        <div>
            <h1 className='text-xl'>Home</h1>
        </div>
        <div>
            <h1 className='text-xl'>Map</h1>
        </div>
        <div>
            <h1 className='text-xl'>Account</h1>
        </div>


    </div>

  )
}

export default BottomNav