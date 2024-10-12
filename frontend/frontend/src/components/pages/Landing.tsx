import React from 'react'
import NavbarMain from '../Navigation/NavbarMain'
import BottomNav from '../Navigation/BottomNav'
import LandingView from '../Views/LandingView'

const Landing = () => {
  return (
    <>
    <div className='h-screen'>
    <div className='w-full h-full flex flex-col'>
      < NavbarMain />
      <LandingView />
      
      </div>
      </div>
    </>
  )
}

export default Landing