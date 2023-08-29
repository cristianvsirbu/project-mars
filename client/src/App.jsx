import './styles/output-stars.css'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


function App() {


  return (
    <div>
      <Navbar />
      {/* Line */}
      <img className="hidden md:block 2xl:flex mx-auto my-0 py-0 w-full" src='assets/line.svg'/>
      <div>
        <Outlet />
      </div>
      <div className='hidden md:flex w-full'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
      </div>
    </div>
  )
}

export default App
