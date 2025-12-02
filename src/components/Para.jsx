import React from 'react'

const Para = ({className, children , text}) => {
  return (
    <p className={`text-[10px] md:[12px] lg:text-[14px] text-white ${className}`}>{text}
      {children}</p>
    
  )
}

export default Para