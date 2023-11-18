import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import wiccanCollective from './navbarResources/wiccanCollectiveLogo.png'
import { NavLink } from 'react-router-dom';



const NavbarComponent = ({fixed}) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2  bg-gradient-to-t from-black to-purple-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to="/">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
             <img src={wiccanCollective} alt=""  className='w-[40%]'/>
            </a>
            </NavLink>
           
            <button
              className="text-white  cursor-pointer text-xl leading-none px-3  border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <FontAwesomeIcon icon={faBars} bounce />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink to="/products">
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Products</span>
                </a>
              </li>
              </NavLink>
             
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3  flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className=" text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  )
}

export default NavbarComponent
