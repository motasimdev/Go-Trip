import React from 'react'

const Button = ({Tagname="button", children, className, ...props}) => {
  return (
    <Tagname {...props} className={`rounded-sm py-4 px-[30px] cursor-pointer ${className}`}>{children}</Tagname>
  )
}

export default Button