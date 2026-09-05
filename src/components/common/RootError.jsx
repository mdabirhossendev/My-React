import React from 'react'
import { NavLink } from 'react-router-dom'

const RootError = () => {
  return (
    <div className=' flex text-center justify-center h-screen items-center'>
        <div className='flex flex-col gap-5 justify-center items-center'>
            <p className='text-[100px] '>404 Not Found</p>
            <NavLink className=" px-7 py-4 bg-primary inline-block rounded-lg text-white" to="/">Back To Home</NavLink>
        </div>
    </div>
  )
}

export default RootError
