import React from 'react'

const Navbar = () => {

  return (
        <div className='gray-950'>
            <ul className='flex justify-center text-yellow-200 font-bold font-Harrington'>
                <li className='mr-[.5rem]'>HOME</li>
                <li  className='mr-[.5rem]'>ABOUT</li>
                <li  className='mr-[.5rem]'>PRODUCTS</li>
                <li  className='mr-[.5rem]'>INFO</li>
                <li  className='mr-[.5rem]'>PROFILE</li>
            </ul>
            <div style={{ border: '1px solid white', width: '100%', margin: '10px 0' }} />
        </div>
      
    
  )
}

export default Navbar
