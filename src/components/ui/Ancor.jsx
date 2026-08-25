import React from 'react'

const Ancor = ({href="#", className= "", target, text}) => {
  return (
    <a href={href} className={className} target={target}>{text}</a>
  )
}

export default Ancor
