import React from 'react'
import Para from './Para'
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = () => {
  return (
    <div>
        <Para className={"text-textClr2"}>Europe  <FaChevronRight/>  United Kingdom (UK)  <FaChevronRight/>  <span className='text-textClr1'>London</span></Para>
    </div>
  )
}

export default Breadcrumb