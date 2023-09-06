import { Outlet, Link } from "react-router-dom"
import { ModelsDataContext } from "../models/modelsContext";
import { useContext } from "react";



const About = () => {
  const modelsData = useContext(ModelsDataContext);
  const categories = modelsData.map(model => model.category);
  return (
    <>
        <ul className="text-white text-4xl text-center font-semibold flex flex-col w-[100vw] h-[50vh] justify-evenly">
          {categories.map(category => (
            <li key={category}>
              <Link to={`/about/${category}`}>
                {category.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
    </>
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