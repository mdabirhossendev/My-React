import React from 'react'

const Image = ({onClick, sourch, alt}) => {
  return (
    <img onClick={onClick} src={sourch} alt={alt} />
  )
}

export default Image
