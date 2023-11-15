import React from 'react'
import headerImage from './headerassets/headereccomerce.png'

const Header = () => {
  return (
    <div>
    <img src={headerImage} alt="" className='w-[100%] relative z-[0]'/>
    <h1 className='text-4xl font-bold text-yellow-100 text-shadow-mdtext-white text-[2rem] font-Harrington text-center z-[1] relative bottom-[10rem]'>Wiccan's Collection</h1>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] bg-brown-500 border border-brown-600 px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Mystic Essentials</button>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] bg-brown-500 border border-brown-600 px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Our Story</button>
    </div>
  )
}

export default Header
