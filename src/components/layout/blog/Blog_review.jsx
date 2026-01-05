import Flex from '@/components/Flex'
import ParaBase from '@/components/ParaBase'
import React from 'react'
import user from '/src/assets/blog/user.png'

const Blog_review = () => {
  return (
    <>
    <section className='py-2 lg:pt-6 px-3 lg:px-0'>
        <div className="max-w-[850px] m-auto">
            <h6 className='font-medium text-[22px] text-textClr1'>Guest reviews</h6>
            <Flex>
                <img src={user} alt="" />
            </Flex>
        </div>
    </section>
    </>
  )
}

export default Blog_review