import React from 'react'
import About from '../../components/pages/About'
import Service from '../../components/pages/Service'

import NavBer from '../../components/layout/NavBer'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/pages/Banner'


const Index = () => {
    return (
        <>
        <NavBer/>
        <Banner/>        
        <About />
        <Service />
        <Footer/>
        </>
    )
}

export default Index