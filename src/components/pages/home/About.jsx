import React from 'react'
import MiniLink from '../../ui/MiniLink'
import Paragraph from '../../ui/Paragraph'
import PrimaryButton from '../../ui/PrimaryButton'
import Image from '../../ui/Image'
import AboutImg from "../../../assets/aboutImg.png"
import AboutImg2 from "../../../assets/AboutImg2.png"

const About = () => {
  return (
    <section className='bg-[#0A3F87] py-25'>
      <div className="container">
        <div className="flex items-center gap-18.5">
          <div>
            <MiniLink href='#' className="text-white bg-white/15" text="About Uclean" />
            <h2 className='mt-4.25 w-133.25 tracking-[-1.2px] text-white text-[48px] font-semibold font-Quicksand leading-14.4'>Bringing Clean, Comfort, and Care Together</h2>
            <Paragraph className="font-normal text-4 text-white/75 leading-7 w-144.25" text="We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. With years of experience in the industry, we’ve perfected our cleaning methods to ensure every job is done right."/>
            <div>
              <PrimaryButton className="text-[#212529] bg-[#FEE74A] mt-5.75 hover:text-white hover:border-red-600  " text="Book Service Now"/>
            </div>
          </div>
          <div className='flex items-center '>
            <Image sourch={AboutImg}/>
            <Image sourch={AboutImg2}/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
