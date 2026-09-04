import React from 'react'
import NavBer from '../../components/layout/NavBer'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/pages/home/Banner'
import About from '../../components/pages/home/About'
import Service from '../../components/pages/home/Service'

const HomeIndex = () => {
    return (
        <>
        <NavBer/>
        <Banner/>
        <About/>
        <Service/>
        <Footer/>
        </>
    )
}

export default HomeIndex