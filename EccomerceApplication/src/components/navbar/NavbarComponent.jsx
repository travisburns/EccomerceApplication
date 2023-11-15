import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {

  return (
        <div className='gray-950'>
             <Navbar className="bg-body-tertiary">
      <Container className='flex justify-center text-yellow-200 font-bold font-Harrington'>
        <Navbar.Brand href="#home">Wiccan Collection</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
           Home <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <div style={{ border: '1px solid white', width: '100%', margin: '10px 0' }} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
            
            
            {/* <ul className='flex justify-center text-yellow-200 font-bold font-Harrington'>
                <li className='mr-[.5rem]'>HOME</li>
                <li  className='mr-[.5rem]'>ABOUT</li>
                <li  className='mr-[.5rem]'>PRODUCTS</li>
                <li  className='mr-[.5rem]'>INFO</li>
                <li  className='mr-[.5rem]'>PROFILE</li>
            </ul>
            <div style={{ border: '1px solid white', width: '100%', margin: '10px 0' }} /> */}
        </div>
      
    
  )
}

export default NavbarComponent
