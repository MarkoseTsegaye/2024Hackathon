import React from 'react'
import { Link } from 'react-router-dom'; // Import Link component
import { MdHome } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';

const BottomNav = () => {
  return (
    <div className="lg:hidden w-full place-self-end border-1 border-black drop-shadow-2xl bg-white p-4 h-[10%] flex flex-row justify-around items-center instrument-sans-regular">
        <Link to="/home">
        <div className='flex flex-row align-center items-center'>
          <MdHome />

            <h1 className='text-xl'>Home</h1>
        </div>
        </Link>
        <Link to="/account">
        <div className='flex flex-row items-center'>
        <MdAccountCircle />

            <h1 className='text-xl'>Account</h1>
        </div>
        </Link>


    </div>

  )
}

export default BottomNav