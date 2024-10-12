import React from 'react'
import Button from './Button'

const MainView = () => {
  return (
    <div className='h-full'>
        <div className='h-2/3'></div>
        <div className='h-1/3 place-content-end'>
        <Button title="Report A Fire"></Button>
        <Button title="Find Exit"></Button>
        </div>
    </div>
  )
}

export default MainView