import React from 'react'
import NavBer from './NavBer'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
      <NavBer/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
