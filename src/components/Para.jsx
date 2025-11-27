import React from 'react'

const Para = ({className, children}) => {
  return (
    <p className={`text-[14px] text-white ${className}`}>{children}</p>
    
  )
}

export default Para