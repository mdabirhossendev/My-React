import React from 'react'
import Container from '../ui/Container'
import Image from '../ui/Image'
import logo from "../../assets/logo.png"
import Ancor from '../ui/Ancor'
import menuData from '../../dammyData/menudata'
import PrimaryButton from '../ui/PrimaryButton'
import { FaPhone } from "react-icons/fa";


const NavBer = () => {


  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-50 bg-white px-6 py-4 shadow-sm'>
        <Container>
         <div className=''>
           <div className='flex items-center justify-between '>
            <div>
              <Image sourch={logo} alt="Not Found " />
            </div>
            <div>
              <ul className='flex gap-7.5 '>
                {menuData.map((item, index)=>(
                <li key={item.id}>
                  <Ancor  href={item.href} text={item.label}  className='font-semibold text-sm leading-7 text-[#161C2D] hover:text-Primary transition all duration-300 relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-green-500 after:-bottom-0.75 after:left-1/2 after:-translate-x-1/2 after:duration-300 hover:after:w-full' />
                </li>
                ))
                }
              </ul>
            </div>
            <div className='flex gap-4.75'>
              <div className='text-center' >
                <Ancor className='font-normal font-Quicksand text-[12px] leading-5 text-[#707070]' text="Need Help?" href='#'/>
                <div className='flex items-center gap-2'>
                  <FaPhone className='text-primary' />
                  <Ancor href='#' text="+1 5000 6000"/>
                </div>
              </div>
              <PrimaryButton text="Book Service Now" className="font-[Quicksand]  bg-primary text-[#FFFFFF]" />
            </div>
          </div>
         </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBer
