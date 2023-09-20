import { Outlet, Link, useLocation } from "react-router-dom"
import { ModelsDataContext } from "../models/modelsContext";
import { useContext } from "react";

const About = () => {
  const modelsData = useContext(ModelsDataContext);
  const categories = modelsData.map((model) => model.category);
  const location = useLocation();

  return (
    <div className="w-full">
      <ul
        className={`text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:h-[80vh] flex md:justify-evenly flex-col my-12 md:flex-row flex-wrap  items-center ${location.pathname.includes("/about/") ? "hidden" : ""
          }`}
      >
        {categories.map((category) => {
          const currentCategory = modelsData.find((model) => model.category === category);
          return (
            <li key={category}>
              <div className="w-[15rem] md:w-[18rem] h-[23rem] md:h-[28rem] my-6 lg:w-[25rem] lg:h-[35rem] blur__card parallax">
                <Link to={`/about/${category}`} className="flex flex-col h-full justify-between py-12">
                  <img src={currentCategory.cover} className="w-[12rem] lg:w-[20rem] self-center" alt={currentCategory.name} loading="lazy" />
                  <span className="blink"> {category.toUpperCase()} </span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default About;



// about
// about / mars
// about / moons
//         moons / phobos
//         moons / deimos

// about / rovers
//       / rovers / active
//                / active/ curiosity
//       / rovers / inactive
//                / inactive/ opportunity
//       / rovers / planned
//                / planned/ spirit
//       / rovers / failed
//                / failed/ mars2

// about / satellites
//       / satellites/ functional
//                   / functional/ maven
//       / satellites/ non-functional
//                   / non-functional/ maven2

// about / missions