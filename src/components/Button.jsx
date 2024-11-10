import React from 'react'

const Button = ({nameButton}) => {
  return (
    <div className='m-auto text-center mb-20'>
        <button className='bg-teal-400 rounded-xl px-5 py-1 font-semibold text-white mt-5'>{nameButton}</button>
    </div>
  )
}

export default Button;