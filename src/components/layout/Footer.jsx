import React from 'react'
import Image from '../ui/Image'
import footerImg from "../../assets/footerLogo.png"
import Paragraph from '../ui/Paragraph'
import Ancor from '../ui/Ancor';
import menuData from '../../dammyData/menudata';
import { footerInfo, FooterServices, iconData } from '../../dammyData/FooterData';


const Footer = () => {
  return (
    <footer className='pt-25 bg-[#161C2D]'>
      <div className="container">
        <div className='flex gap-20'>
          <div className="logo">
            <Image sourch={footerImg} />
            <Paragraph className="text-white/75 leading-7 mt-6 w-93.5 text-[16px] font-normal font-opensans " text="We are a team of passionate cleaning experts who
            take pride in delivering the highest standard of
            service. With years of experience in the industry,
            we’ve perfected our cleaning methods to ensure
            every job is done right." />
            <div className='flex mt-7.5 text-white/75 gap-7'>
              {
                iconData.map((item, index)=>(
                  <Ancor className='text-xl' href={item.url}  text={item.icon} />
                  
                ))
              }
            </div>
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
            <h4  className='text-lg text-white/75 leading-7 font-semibold font-Quicksand '>Our Services</h4>
            <ul className='flex flex-col gap-2.25 mt-5 ' >
              {
                FooterServices.map((item,index)=>(
              <li className='text-white/75' key={item.id}>
                <Ancor text={item.label} href={item.href}/>
              </li>
                ))
              }
            </ul>
          </div>
          <div>
            <div className='flex flex-col gap-6'>
              {
                footerInfo.map((item,index)=>(
                  <div key={item.id}>
                    <div>
                      <div className='flex items-center gap-2'>
                      <div className='[&>svg]:text-[#FEE74A]'>
                      {item.icon}  
                    </div>
                        <h5 className='font-bold font-opensans text-base text-white'>{item.title}</h5>
                    </div>
                      <Paragraph className="text-white/75 font-normal font-opensans leading-7 text-base" text={item.decs}/>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
