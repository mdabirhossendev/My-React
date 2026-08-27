import React from 'react'
import Image from '../ui/Image'
import footerLogo from "../../assets/footerLogo.png"
import Ancor from '../ui/Ancor'
import List from '../ui/List'
import footerData from '../../dammyData/FooterData'
const Footer = () => {
  return (
    <footer className='bg-[#161C2D]'>
      <div className="container">
        <div className="flex pt-25">
          <div className="">
            <div className="footerLogo">
              <Image sourch={footerLogo} alt="Not found" />
            </div>
            <p className='w-93.5 font-normal mt-5.75 mb-7.5 text-4 leading-7 font-opensans text-[#FFFFFF] opacity-75'>We are a team of passionate cleaning experts who
              take pride in delivering the highest standard of
              service. With years of experience in the industry,
              we’ve perfected our cleaning methods to ensure
              every job is done right.</p>
              <div className="pb-14.25 text-white flex gap-1">
                <Ancor className='px-2.5 py-2.5 bg-transparent border-white hover:text-black transition all duration-300 rounded-full hover:bg-white mr-12.5' href='#' text={<i class="fa-brands fa-facebook-f"></i>}/>
                <Ancor className='px-2.5 py-2.5 bg-transparent border-white hover:text-black transition all duration-300 rounded-full hover:bg-white' href='#' text={<i class="fa-brands fa-discord"></i>}/>
                <Ancor className='px-2.5 py-2.5 bg-transparent border-white hover:text-black transition all duration-300 rounded-full hover:bg-white' href='#' text={<i class="fa-brands fa-tiktok"></i>}/>
                <Ancor className='px-2.5 py-2.5 bg-transparent border-white hover:text-black transition all duration-300 rounded-full hover:bg-white' href='#' text={<i class="fa-brands fa-youtube"></i>}/>
              </div>
          </div>
          
            <div className="flex text-white">
              <div>
                <h4>Company</h4>
                  {
                    footerData.map((item,index)=>(
                      <ul className='' key={item.id}>
                      <List className='' text={item.label}/>
                </ul>
                      
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
