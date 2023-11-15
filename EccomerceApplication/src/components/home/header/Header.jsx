import React from 'react'
import headerImage from './headerassets/headereccomerce.png'

const Header = () => {
  return (
    <div className='mb-[3rem]'>
    <img src={headerImage} alt="" className='w-[100%] 3xl:w-[100%] 3xl:h-[50rem] relative z-[0]'/>
    <h1 className='text-4xl font-bold text-yellow-100 text-shadow-mdtext-white text-[2rem] font-Harrington text-center z-[1] relative bottom-[10rem] 3xl:text-[8rem] 3xl:bottom-[28rem]'>Wiccan's Collection</h1>
    <div className='flex justify-center'>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] 3xl:text-[3rem] 3xl:bottom-[24rem] bg-slate-900 border border-white px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Mystic Essentials</button>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] 3xl:text-[3rem] 3xl:bottom-[24rem] bg-slate-900 border border-white px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Our Story</button>
    
    </div>
    
    </div>
    
  )
}

export default Header
