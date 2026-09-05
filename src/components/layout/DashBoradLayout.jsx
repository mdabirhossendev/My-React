import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoradLayout = () => {
  return (
    <>
        <nav className='bg-primary text-center text-10 h-40 '>i am From Header</nav>
        <Outlet/>
        <footer  className='bg-primary text-10 text-center h-40 '> I am from Footer</footer>
    </>
  )
}

export default DashBoradLayout
