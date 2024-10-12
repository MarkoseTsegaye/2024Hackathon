import React from 'react'
import Button from './Button'

const LandingView = () => {
  return (
    <div className='h-full'>
    <div className='h-1/3 place-content-end'>
    <h1 className='text-5xl text-center'>Guiding The Way.</h1>
    </div>
    <div className='h-1/3 place-content-end'>
    <Button title="Sign Up"></Button>
    <Button title="Log In"></Button>
    </div>
</div>
  )
}

export default LandingView