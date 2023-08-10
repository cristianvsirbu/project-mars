import { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.webp";
import close from "../assets/close.webp";




const Navbar = () => {
  const navLinks = [
    {
      to: '/home',
      text: 'Home'
    },
    {
      to: '/about',
      text: 'About'
    },
    {
      to: '/imagery',
      text: 'Imagery'
    },
    {
      to: '/weather',
      text: 'Weather'
    }
  ]
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (

    <>
      
      {/* Navbar */}
      <nav
        className="flex
                   h-24
                   justify-between
                   mx-6
                   md:mx-10
                   xl:h-32
                   xl:mx-2xl:h-36">
        
        {/* Logo */}
        <img src="/src/assets/logo.png"
          className="h-20 
                     md:h-24
                     mt-2
                     xl:h-32
                     xl:ml-12
                     xl:mt-4
                     2xl:h-40
                     2xl:ml-32"/>
        
        {/* Menu */}
        <ul className="hidden 
                       md:flex
                       items-center
                       w-1/2
                       justify-between
                       2xl:justify-around">
          {navLinks.map(link => (
            <li className={` text-white 
                               text-decoration-none
                               font-regular
                               text-[16px]
                               lg:text-[18px]
                               xl:text-[24px]
                               2xl:text-[34px]`}
              key={link.to}
            >
              <NavLink to={link.to}>{link.text}</NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden
                        flex
                        flex-1
                        justify-end
                        items-center">
          <button className='h-12 w-12' onClick={toggleMenu}>{menuOpen ? (<img src={close} />) : (<img src={menu} />)}</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar