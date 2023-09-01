import { Outlet, Link } from "react-router-dom"
import { ModelsDataContext } from "../models/modelsContext";
import { useContext } from "react";



const About = () => {
  const modelsData = useContext(ModelsDataContext);
  const categories = modelsData.map(model => model.category);
  console.log(categories);
  return (
    <>
      <div className="text-white text-5xl">
        <h1>Categories</h1>
        <ul>
          {categories.map(category => (
            <li key={category}>
              <Link to={`/about/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
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