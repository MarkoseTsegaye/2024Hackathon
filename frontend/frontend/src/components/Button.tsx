import React from 'react'

const Button = ({title} : {title : string}) => {

  return (
    <button className='w-4/5 my-2 drop-shadow-lg mx-[10%] rounded-lg border-black border-1 h-[40px] text-center bg-white'>{title}</button>
  )
}

export default Button