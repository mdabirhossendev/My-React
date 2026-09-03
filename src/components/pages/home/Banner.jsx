import React from 'react'
import Paragraph from '../../ui/Paragraph'
import PrimaryButton from '../../ui/PrimaryButton'
import Image from '../../ui/Image'
import bannerImg from "../../../assets/banner.png"
import MiniLink from '../../ui/MiniLink'

const Banner = () => {
  return (
    <div className="mt-28.75">
      <div className="container">
        <div className='text-center'>
          <MiniLink href='#' text="Reliable Clean"/>
          <h1 className='text-[96px] font-semibold font-Quicksand leading-27 space-[-4.8]'>Sparkling Spaces</h1>
          <Paragraph className="text-[#707070] font-regular font-opensans leading-8 w-125 inline-block pt-5.75" text="Enjoy a spotless space with our expert cleaning team. Affordable,eco-friendly, and tailored to your needs!"/>
         <div className='mt-8.75'>
           <PrimaryButton className="text-white  bg-primary" text="Book Cleaning Service"/>
         </div>
         <div className='flex justify-center mt-14.25'>
          <Image sourch={bannerImg} alt="bannerImg"/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Banner