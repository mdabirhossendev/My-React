import React from 'react'

const MiniLink = ({className, href="#",text}) => {
  return (
    <a className={`w-fit px-4.25 hover:bg-emerald-700 hover:text-white transition-all duration-300 py-2 rounded-[30px] text-3 font-semibold font-opensans leading-4.50 text-primary bg-primary/10 ${className}`} href={href}>{text}</a>   
  )
}

export default MiniLink
