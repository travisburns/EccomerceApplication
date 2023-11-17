import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import NavbarComponent from './components/navbar/NavbarComponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div class=" bg-gradient-to-b box-shadow-shadow-black ">
    <div className=' bg-gradient-to-b from-slate-950 to-slate-950  '>
    <NavbarComponent />
    <Home />
</div>
      
    </div>
    
    </>
  )

}


export default App
