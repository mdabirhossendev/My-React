import React from 'react'

const Image = ({onClick, sourch, alt, className}) => {
  return (
    <img onClick={onClick} className={`   object-cover ${className}`} src={sourch} alt={alt} />
  )
}

export default Image
