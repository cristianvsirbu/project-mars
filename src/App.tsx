import './styles/output-stars.css';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/Navbar';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      {/* Line */}
      <img
        className="hidden md:flex mx-auto my-0 w-full lg:w-[80%]"
        src="/assets/line.svg"
        alt="Line under Navbar"
      />
      <div className="flex">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <Outlet />
      <Analytics />
    </div>
  );
}

export default App;
