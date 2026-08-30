import React from 'react'
import Image from '../ui/Image'
import footerImg from "../../assets/footerLogo.png"
import Paragraph from '../ui/Paragraph'
import { FaFacebookF, FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";


import Ancor from '../ui/Ancor';
import menuData from '../../dammyData/menudata';
import { FooterServices } from '../../dammyData/FooterService';
// import footerIcon from '../../dammyData/FooterData';


const Footer = () => {
  return (
    <footer className='pt-25 bg-[#161C2D]'>
      <div className="container">
        <div className='flex gap-10'>
          <div className="logo">
            <Image sourch={footerImg} />
            <Paragraph className="text-white/75 leading-7 mt-6 w-93.5 text-[16px] font-normal font-opensans " text="We are a team of passionate cleaning experts who
            take pride in delivering the highest standard of
            service. With years of experience in the industry,
            we’ve perfected our cleaning methods to ensure
            every job is done right." />
          </div>
          <div>
            <h4 className='text-lg text-white/75 leading-7 font-semibold font-Quicksand '>Company</h4>
            <ul className='flex flex-col gap-2.25 mt-5 ' >

              {menuData.map((item, index) => (
                <li className='text-white/75' key={item.id}>
                  <Ancor href='#' text={item.label}  />
                </li>
              ))

              }
            </ul>
          </div>
          <div>
            <h4>Our Services</h4>
            <ul>
              {
                FooterServices.map((item,index)=>(
              <li className='text-white/75' key={item.id}>
                <Ancor text={item.label} href={item.href}/>
              </li>

                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
