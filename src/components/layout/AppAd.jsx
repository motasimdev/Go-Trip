import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import app from "/src/assets/app.png";

const AppAd = () => {
  return (
    <>
    <section className='py-7.5 lg:pt-[120px] lg:pb-15 px-3 lg:px-0'>
        <Container>
            <Flex className="">
                <div className="w-[50%]">
                    <img src={app} alt="" className='w-full'/>
                </div>
                <div className="w-[50%]"></div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default AppAd