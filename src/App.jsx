
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div>
      <Navbar />
      {/* Line */}
      <img className="hidden md:block 2xl:flex mx-auto my-0 py-0 w-full" src="src/assets/line.svg" />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
