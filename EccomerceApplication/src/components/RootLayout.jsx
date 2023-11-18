import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './navbar/NavbarComponent'


const RootLayout = () => {
  return (
    <div>
    <main>
    <NavbarComponent />
        <Outlet />
        
    </main>
    </div>
  )
}

export default RootLayout
