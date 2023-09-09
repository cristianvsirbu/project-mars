import './styles/output-stars.css'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='w-full'>
      <Navbar />
      {/* Line */}
      <img className="hidden md:flex mx-auto my-0 py-0 w-full" src='/assets/line.svg' />
      <div className='hidden md:flex'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
      </div>
      <Outlet />
    </div>
  )
}

export default App
