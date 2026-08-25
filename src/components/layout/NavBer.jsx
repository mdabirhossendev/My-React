import React from 'react'
import Container from '../ui/Container'
import Image from '../ui/Image'
import logo from "../../assets/logo.png"
import Ancor from '../ui/Ancor'
import menuData from '../../dammyData/menudata'

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
                {menuData.map((item)=>(
                <li key={item.id}>
                  <Ancor  href={item.href} text={item.label}  className='font-semibold text-sm leading-7 text-[#161C2D]' />
                </li>
                ))
                }
              </ul>
            </div>
            <div className='flex gap-4.75'>
              <div className='text-center' >
                <p>Need Help?</p>
                <h5><i class="fa-solid fa-phone"></i>
                  +1 5000 6000</h5>
              </div>
              <button className='text-[#FFFFFF] font-bold hover:bg-transparent hover:text-black duration-300 hover:border-black border-2 cursor-pointer py-2 px-4.75 bg-[#48B1FB] rounded-[30px] font-[Quicksand]'>Book Service Now</button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBer
