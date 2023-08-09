
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div>
      <Navbar />
      <img className="absolute" src="src/assets/line.png" />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
