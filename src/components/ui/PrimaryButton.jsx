import React from 'react'

const PrimaryButton = ({className, text}) => {
  return (
    <button className={`py-2.75 px-8 cursor-pointer  hover:text-black hover:bg-transparent hover:border-2 border-2 hover:border-black transition all duration-300 hover:scale-105  rounded-[30px] text-[15px] font-bold font-Quicksand leading-7 ${className}`}>{text}</button>
  )
}

export default PrimaryButton
