import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';
import routes from './routes/routes';

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleItemClick = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuIsOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuIsOpen]);

  const navLinks = routes.flatMap((route) => {
    if (route.children) {
      return route.children.map((childRoute) => (
        <li
          className={`text-white blink cursor-pointer font-bold py-2 md:py-0 text-[2rem] md:text-[1.2rem] xl:text-[1.5rem]`}
          key={childRoute.path}
          onClick={handleItemClick}
        >
          <NavLink to={childRoute.path} onClick={handleItemClick}>
            {childRoute.text}
          </NavLink>
        </li>
      ));
    }
    return null;
  });

  return (
    <div className="navbar select-none">
      {/* Navbar */}
      <nav className="mx-6 h-20 flex lg:justify-evenly md:mx-16 lg:mx-32 md:h-14 lg:h-16">
        {/* Logo */}
        <div className="mt-3 h-full md:w-1/4 flex items-center justify-center">
          <Link to="/" aria-label="Go to Home">
            <img src="/assets/logos/logo.webp" className="w-24 md:w-20 xl:w-24" alt="Logo" />
          </Link>
        </div>

        {/* Menu */}
        <ul
          className={`hidden md:justify-between items-center md:flex md:w-[80%] lg:w-[60%] xl:justify-evenly`}
        >
          {navLinks}
        </ul>

        {/* Hamburger Menu */}
        <div className="flex flex-1 justify-end items-center md:hidden">
          {/* Close Menu */}
          {menuIsOpen && (
            <button className="h-12 w-12" onClick={() => setMenuIsOpen(false)}>
              <img src="/assets/close.webp" alt="Menu" className="w-full h-full" />
            </button>
          )}

          {/* Open Menu */}
          {!menuIsOpen && (
            <button className="h-12 w-12" onClick={() => setMenuIsOpen(true)}>
              <img src="/assets/menu.webp" alt="Open Menu" className="w-full h-full" />
            </button>
          )}

          {/* Dropdown Menu */}
          <div
            className={`${
              menuIsOpen ? 'flex' : 'hidden'
            } px-8 py-8 top-40 right-10 flex-col absolute rounded-xl min-w-[15rem] bg-slate-900 sidebar`}
            ref={dropdownRef}
          >
            {menuIsOpen && <ul className="flex flex-col  items-center">{navLinks}</ul>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
