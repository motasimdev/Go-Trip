import React from 'react'

const ParaBase = ({className, children, text}) => {
  return (
    <p className={`text-[12px] lg:text-base text-white font-medium ${className}`}>{text}{children}</p>
  )
}

export default ParaBase