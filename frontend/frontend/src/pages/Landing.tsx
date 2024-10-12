import React from 'react'
import NavbarMain from '../components/NavbarMain'
import BottomNav from '../components/BottomNav'
import LandingView from '../components/LandingView'

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