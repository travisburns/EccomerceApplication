import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './navbar/NavbarComponent'
import { Provider } from 'react-redux';
import store from '../store/store'

const RootLayout = () => {
  return (

    <>
    <Provider store={store}>
    <NavbarComponent />
    <main>
    
        <Outlet />
        
    </main>
    </Provider>
    
    </>
      
   
  )
}

export default RootLayout
