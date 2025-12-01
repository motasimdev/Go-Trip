import React from 'react'

const Para15 = ({className, children}) => {
  return (
    <p className={`text-[12px] md:text-sm lg:text-[15px] ${className}`}>{children}</p>
    
  )
}

export default Para15