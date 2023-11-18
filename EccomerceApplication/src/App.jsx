import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import NavbarComponent from './components/navbar/NavbarComponent'
import Product from './components/products/Product'
import Cart from './components/cart/Cart'
import RootLayout from './components/RootLayout'



function App() {
  const [count, setCount] = useState(0)


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <>
    
    <div class=" bg-gradient-to-b box-shadow-shadow-black ">
    <div className=' bg-gradient-to-b from-slate-950 to-slate-950  '>
    <RouterProvider router={router} />
    
</div>
      
    </div>
    
    </>
  )

}


export default App
