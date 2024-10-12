import React from 'react'
import NavbarMain from '../components/NavbarMain'
import MainView from '../components/MainView'
import BottomNav from '../components/BottomNav'

const Home = () => {
  return (
    <>
    <div className='h-screen'>
    <div className='w-full h-full flex flex-col'>
      < NavbarMain />
      <MainView />
      <BottomNav />
      </div>
      </div>
    </>
    
  )
}

export default Home