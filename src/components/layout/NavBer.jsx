import React from 'react'
import logo from "../../assets/vite.svg"

const NavBer = () => {
  return (
    <>
      <nav className='py-4 bg-amber-800'>
          <div className="container">
            <div className='flex items-center justify-between '>
              <div className="logo">
                <img src={logo} alt="Not Found"/>
              </div>
              <div className='flex gap-50'>
                <ul className=' flex items-center gap-6 text-white [&_a]:font-normal font-oswald'>
                  <li className='hover:text-blue-600'>
                    <a className='hover:text-blue-600 duration-300' href="#">Home</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-600 duration-300' href="#">About</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-600 duration-300' href="#">Services</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-600 duration-300' href="#">Blog</a>
                  </li>
                  <li>
                    <a className='hover:text-blue-600 duration-300' href="#">Contact</a>
                  </li>
                </ul>
              <div>
                <a className='py-3.5 px-8.5 border font-bold bg-green-700 rounded-lg mr-8 hover:bg-transparent hover:border-amber-50 duration-300 text-white hover:text-black' href="#">Sign In</a>
              </div>
              </div>
            </div>
          </div>
      </nav>
    </>
  )
}

export default NavBer
