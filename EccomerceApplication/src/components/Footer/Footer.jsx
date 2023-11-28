import React from 'react';
import wiccanCollection from '../../assets/wiccanCollectiveLogo.png'

const Footer = () => {
  return (
    <footer className = "footer  bg-dark">
        <div className = "container">
            <div className = "footer-content   bg-black text-yellow-100 font-Harrington grid">
            <img src={wiccanCollection} className='w-[50%] ml-[25%]' />
                <div className = "footer-item text-center">
                    
                    <h6 className = "text-[1.5rem] font-bold">Links</h6>
                    <ul className='flex flex-1 justify-center'>
                        <li><a href = "/aboutus" className = "fs-15">About Us</a></li>
                        <li><a href = "/contact" className = "fs-15">Contact Us</a></li>
                        <li><a href = "/blog" className = "fs-15">Blog</a></li>
                        <li><a href = "faq" className = "fs-15">FAQ's</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='text-[1.5rem] font-bold'>Policies</h6>
                    <ul className='flex flex-1 justify-center'>
                        <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
                        <li><a href = "/cookies" className = "fs-15">Cookies Policy</a></li>
                        <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='text-[1.5rem] font-bold'>About Shopping Hub</h6>
                    <ul className='flex flex-1 justify-center'>
                        <li><a href = "/terms" className = "fs-15">Company Info</a></li>
                        <li><a href = "/cookies" className = "fs-15">Branches</a></li>
                        <li><a href = "/policy" className = "fs-15">Store</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='text-[1.5rem] font-bold'>Contact</h6>
                    <ul className='flex flex-1 justify-center'>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+678 004 5754</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">info@shophub.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer