import React from 'react'

const ParaBase = ({className, children}) => {
  return (
    <p className={`text-[12px] lg:text-base text-white font-medium ${className}`}>{children}</p>
  )
}

export default ParaBase