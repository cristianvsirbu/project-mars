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
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="flex
                   justify-between
                   h-24
                   mx-6
                   md:mx-10
                   xl:h-32
                   2xl:h-36">

        {/* Logo */}
        <img src="/src/assets/logo.png"
          className="h-20 
                     md:h-24
                     mt-2
                     lg:ml-6
                     xl:h-32
                     xl:ml-12
                     xl:mt-4
                     2xl:h-40
                     2xl:ml-32"/>

        {/* Menu */}
        <ul className={`hidden
                        md:flex
                        items-center
                        w-1/2
                        justify-between
                        2xl:justify-around
                        `}>
          {navLinks.map(link => (
            <li className={`   text-slate-500
                               hover:text-white
                               ease-out
                               duration-200
                               text-decoration-none
                               font-regular
                               text-[16px]
                               lg:text-[18px]
                               xl:text-[24px]
                               2xl:text-[30px]`}
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
                        items-center
                        ">
          <button className='h-12 w-12' onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {menuIsOpen ? (<img src={close} alt="Close Menu" />) : (<img src={menu} alt="Open Menu" />)}
          </button>

          {/* Dropdown Menu */}
          <div className={`${menuIsOpen ? 'flex' : 'hidden'} 
                           flex-col
                           rounded-xl
                           absolute
                           top-32
                           right-8
                           p-8
                           min-w-[260px]
                         bg-slate-900
                           h-1/2
                           sidebar`}>
            {menuIsOpen && (
              <ul className="flex flex-col items-center text-white text-[26px] h-full justify-between">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <NavLink to={link.to}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar