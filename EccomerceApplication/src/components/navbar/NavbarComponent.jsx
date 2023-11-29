import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import wiccanCollective from './navbarResources/wiccanCollectiveLogo.png'
import { NavLink } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';


const NavbarComponent = ({fixed}) => {
  const cartProducts = useSelector(state => state.cart)


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2   bg-stone-950/75 " >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-8 ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to="/">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase text-yellow-100"
              href="#pablo"
            >
             <img src={wiccanCollective} alt=""  className='w-[25%] 3xl:w-[25%]'/>
            </a>
            </NavLink>
           
            <button
              className=" text-white  cursor-pointer text-xl leading-none px-3  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <FontAwesomeIcon icon={faBars} bounce className='text-3xl' />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center absolute top-[101%] right-[.01rem] z-[100]  w-[80%]  lg:top-[40%]  " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >      
      
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink to="/products">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 opacity-75"></i><span className="ml-2 text-[1.2rem] font-Harrington">Products</span>
                </a>
              </li>
              </NavLink>
             
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-yellow-100 opacity-75"></i><span className="ml-2 text-[1.2rem] font-Harrington">About</span>
                </a>
              </li>
              <NavLink to="/cart">
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-yellow-100 "></i><span className="ml-2 text-[1.2rem] font-Harrington">Bag {cartProducts.length} </span>
                </a>
              </li>
              </NavLink>
              <NavLink to="/policies">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 "></i><span className="ml-2 text-[1.2rem] font-Harrington">Policies</span>
                </a>
              </li>
              </NavLink>

              <NavLink to="/blog">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 "></i><span className="ml-2 text-[1.2rem] font-Harrington">Blog</span>
                </a>
              </li>
              </NavLink>

              <NavLink to="/products">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 opacity-75"></i><span className="ml-2 text-[1.2rem] font-Harrington">Products</span>
                </a>
              </li>
              </NavLink>
              <NavLink to="/faqs">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 opacity-75"></i><span className="ml-2 text-[1.2rem] font-Harrington">Faqs</span>
                </a>
              </li>
              </NavLink>
              <NavLink to="/contact">
              <li className="nav-item ">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-yellow-100 "
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-yellow-100 opacity-75"></i><span className="ml-2 text-[1.2rem] font-Harrington">Contact</span>
                </a>
              </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    
  )
}

export default NavbarComponent
