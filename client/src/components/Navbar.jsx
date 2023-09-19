import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            4k:text-[46px]`}
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
                   md:mx-16
                   md:h-14
                   lg:h-16
                   xl:h-20
                   2xl:h-24
                    ">

        {/* Logo */}
        <Link to="/">
        <img src="/assets/logos/logo.png"
            className="h-[70%]
                     md:h-full
                     mt-[1rem]
                     md:mt-[0.8rem]
                     lg:ml-[1.5rem]
                     lg:h-[4rem]
                     xl:h-[5rem]
                     xl:ml-[2rem]
                     xl:mt-[1rem]
                     2xl:ml-[5rem]
                     2xl:h-[7rem]"/>
        </Link>
        {/* Menu */}
        <ul className={`hidden
                        md:flex
                        items-center
                        md:w-[75%]
                        lg:w-[70%]
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
            {menuIsOpen ? (<img src={"/assets/close.webp"} alt="Close Menu" />) : (<img src={"/assets/menu.webp"} alt="Open Menu" />)}
          </button>

          {/* Dropdown Menu */}
          <div className={`${menuIsOpen ? 'flex' : 'hidden'} 
                           flex-col
                           rounded-xl
                           absolute
                           top-40
                           right-10
                           px-8
                           py-8
                           min-w-[15rem]
                         bg-slate-900
                           sidebar
                           `}>
            {menuIsOpen && (
              <ul className="flex flex-col  items-center">
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