import React from 'react'

const PrimaryButton = ({className, text}) => {
  return (
    <button className={`py-4 px-8 rounded-[30px] text-[15px] font-bold font-Quicksand leading-7 ${className}`}>{text}</button>
  )
}

export default PrimaryButton
