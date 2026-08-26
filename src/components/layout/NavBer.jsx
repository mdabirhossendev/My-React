import React from 'react'
import Container from '../ui/Container'
import Image from '../ui/Image'
import logo from "../../assets/logo.png"
import Ancor from '../ui/Ancor'
import menuData from '../../dammyData/menudata'
import PrimaryButton from '../ui/PrimaryButton'

const NavBer = () => {


  return (
    <>
      <nav className='py-3.5'>
        <Container>
          <div className='flex items-center justify-between '>
            <div>
              <Image sourch={logo} alt="Not Found " />
            </div>
            <div>
              <ul className='flex gap-7.5 '>
                {menuData.map((item, index)=>(
                <li key={index}>
                  <Ancor  href={item.href} text={item.label}  className='font-semibold text-sm leading-7 text-[#161C2D] hover:text-Primary transition all duration-300' />
                </li>
                ))
                }
              </ul>
            </div>
            <div className='flex gap-4.75'>
              <div className='text-center' >
                <p>Need Help?</p>
                <h5><i className="fa-solid fa-phone"></i>
                  +1 5000 6000</h5>
              </div>
              <PrimaryButton text="Book Service Now" className="font-[Quicksand] bg-Primary text-[#FFFFFF] hover:text-black hover:bg-transparent hover:border-2 border-2 hover:border-black transition all duration-300 hover:scale-105" />
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBer
