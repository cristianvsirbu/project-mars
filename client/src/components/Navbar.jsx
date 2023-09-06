import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
import routes from "./routes/routes";





const Navbar = () => {

  const navLinks = routes.flatMap((route) => {
    if (route.children) {
      return route.children.map((childRoute) => (
        <li
          className={`text-white
            blink 
            cursor-pointer     
            font-bold
            py-2
            md:py-0
            text-[32px]
            md:text-[20px]
            lg:text-[24px]
            xl:text-[32px]
            2xl:text-[46px]`}
          key={childRoute.path}
        >
          <NavLink to={childRoute.path}>{childRoute.text}</NavLink>
        </li>
      ));
    }
    return null;
  });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="navbar select-none">
      {/* Navbar */}
      <nav
        className="flex
                   justify-between
                   h-24
                   mx-6
                   md:mx-10
                   md:h-14
                   lg:h-16
                   xl:h-28
                   2xl:h-36
                    ">

        {/* Logo */}
        <img src="/assets/logo.png"
          className="h-20
                     z-1 
                     md:h-14
                     mt-2
                     lg:ml-6
                     lg:h-16
                     xl:h-28
                     xl:ml-12
                     xl:mt-4
                     2xl:h-40
                     2xl:ml-32"/>

        {/* Menu */}
        <ul className={`hidden
                        md:flex
                        items-center
                        md:w-3/4
                        lg:w-7/10
                        justify-between
                        2xl:justify-around
                        `}>

          {navLinks}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden
                        flex
                        flex-1
                        justify-end
                        items-center
                        ">
          <button className='h-12 w-12' onClick={() => setMenuIsOpen(!menuIsOpen)}>
            {menuIsOpen ? (<img src={"../../assets/close.webp"} alt="Close Menu" />) : (<img src={"../../assets/menu.webp"} alt="Open Menu" />)}
          </button>

          {/* Dropdown Menu */}
          <div className={`${menuIsOpen ? 'flex' : 'hidden'} 
                           flex-col
                           rounded-xl
                           absolute
                           top-32
                           right-8
                           px-8
                           py-12
                           min-w-[260px]
                         bg-slate-900
                           sidebar`}>
            {menuIsOpen && (
              <ul className="flex flex-col items-center text-white text-[26px] h-1/2 justify-between">
                {navLinks}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar