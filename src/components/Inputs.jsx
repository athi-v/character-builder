import React from 'react'

const Inputs = ({type, id, value, className, register, validation}) => {
  return (
    <input
                      
    type={type}
    id={id}
    value={value}
    className={className}
    {...register("color", validation)}
  />  )
}

export default Inputs
