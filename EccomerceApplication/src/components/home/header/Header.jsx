import React from 'react'
import headerImage from './headerassets/headereccomerce.png'
import headeritem from './headerassets/header-item.png'

const Header = () => {
  return (
    <div className='h-[65rem]'>
      
    <img src={headerImage} alt="" className='w-[100%] lg:h-[40rem] 3xl:w-[100%] 3xl:h-[50rem] relative z-[0]'/>
     
    <h1 className='text-4xl font-bold text-yellow-100 text-shadow-mdtext-white text-[2rem] font-Harrington text-center z-[1] relative  bottom-[10rem] sm:text-[3rem] sm:bottom-[20rem] md:text-[4rem] md:bottom-[24rem] xl:text-[5rem] 2xl:text-[7rem]  3xl:text-[8rem] 3xl:bottom-[28rem]'>Wiccan's Collection</h1>
    <div className='flex justify-center'>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] sm:text-[1.5rem] sm:bottom-[18rem] lg:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.5rem] 3xl:text-[3rem] 3xl:bottom-[24rem] md:bottom-[22rem] bg-slate-900 border border-white px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Mystic Essentials</button>
    <button className='font-bold text-yellow-100 text-[1rem] font-Harrington text-center z-[1] relative bottom-[8rem] sm:text-[1.5rem] sm:bottom-[18rem] lg:text-[1.8rem] xl-text[2.2rem] 2xl=text-[2.5rem] 3xl:text-[3rem] 3xl:bottom-[24rem] md:bottom-[22rem]  bg-slate-900 border border-white px-4 py-2  hover:bg-brown-600 hover:text-yellow-200'> Our Story</button>

    </div>
    <img className='relative bottom-[7rem] sm:bottom-[10rem] md:bottom-[12rem] lg:bottom-[14rem] xl:bottom-[16rem] xl:w-[100%] 2xl:bottom-[18rem] 3xl:bottom-[20rem]' src={headeritem} alt="" />    
    <img className='relative bottom-[31.5rem] z-20 sm:top-[10rem] md:bottom-[12rem] lg:bottom-[14rem] xl:bottom-[16rem] xl:w-[100%] 2xl:bottom-[18rem] 3xl:bottom-[20rem]' src={headeritem} alt="" />
    </div>
    
  )
}

export default Header
