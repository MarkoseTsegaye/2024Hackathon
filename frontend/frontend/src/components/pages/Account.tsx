import React from 'react'
import MainView from '../Views/MainView'
import BottomNav from '../Navigation/BottomNav'
import AccountView from '../Views/AccountView'
import NavbarMain from '../Navigation/NavbarMain'

const Account = () => {
  return (
    <>
    <div className='h-screen'>
    <div className='w-full h-full flex flex-col'>
      <NavbarMain />
      <AccountView />
      <BottomNav />
      </div>
      </div>
    </>
  )
}

export default Account