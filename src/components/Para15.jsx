import React from 'react'

const Para15 = ({className, children, text}) => {
  return (
    <p className={`text-[12px] md:text-sm lg:text-[15px] ${className}`}>{text} {children}</p>
    
  )
}

export default Para15