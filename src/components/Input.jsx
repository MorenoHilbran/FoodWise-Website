import React from 'react'

const Input = ({forName, InputName, type, name}) => {
  return (
    <div>
        <label for={forName}>{InputName}</label>
        <input type={type} name={name} id={forName} className='w-full border-2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400' />
    </div>
  )
}

export default Input