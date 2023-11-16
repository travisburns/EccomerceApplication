import React from
 
'react';
import Container from
 
'react-bootstrap/Container';
import Navbar from
 
'react-bootstrap/Navbar';
import wiccanLogo from './navbarResources/wiccanCollectiveLogo.png';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import { useMediaQuery } from 'react-responsive';

const NavbarComponent = () => {
  const isMdOrGreater = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className='bg-gray-950'>
      <Navbar className="bg-body-tertiary">
        <Container className=' text-yellow-200 font-bold font-Harrington'>
          <div className='flex'>
          <Navbar.Brand href="#home" className='md:w-[30%]'>
            <img className='w-[25%] sm:w-[35%] md:w-[40%] lg:w-[35%]' src={wiccanLogo} />
          </Navbar.Brand>
          <Navbar.Toggle />

          {isMdOrGreater && (
            <div className='flex flex-row gap-3 md:text-[1.5rem] md:relative md:top-[1.5rem] lg:text-[1.8rem] lg:top-[2rem] xl:text-[2.1rem] xl:top-[2.4rem] 2xl:text-[2.4rem] 2xl:top-[2.8rem] 3xl:top-[3.2rem] 3xl:text-[3.1rem]'>
              <NavbarText className='text-yellow-200 font-bold font-Harrington'>
                <a href='' className=''>About</a>
              </NavbarText>
              <NavbarText>
                <a href=''>Our Shop</a>
              </NavbarText>
              <NavbarText>
                <a href=''>Reviews</a>
              </NavbarText>
              <Navbar.Text className=''>
                <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </div>
          )}
          </div>
          

          <Navbar.Collapse className="justify-content-end">
            {/* Other Navbar.Collapse content */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;