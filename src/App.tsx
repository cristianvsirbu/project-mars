import './styles/output-stars.css';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import Loader from './components/ui/Loader';

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* Line */}
      <img
        className="hidden md:flex mx-auto my-0 w-full lg:w-[80%]"
        src="/assets/line.svg"
        alt="Line under Navbar"
      />
      <div className="hidden md:flex" aria-hidden="true">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Analytics />
    </div>
  );
}

export default App;
