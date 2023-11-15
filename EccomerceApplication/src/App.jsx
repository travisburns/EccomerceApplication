import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-gradient-to-b from-gray-950 to-black shadow'>
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 to-black opacity-90">
    <Navbar />
    <Home />
</div>
      
    </div>
    
    </>
  )

}


export default App
