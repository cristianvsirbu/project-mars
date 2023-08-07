
import { Outlet } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <Outlet />
    </div>
  )
}

export default App
