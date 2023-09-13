import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ModelsDataContext } from "../../models/modelsContext";

const Moons = () => {
  const modelsData = useContext(ModelsDataContext);
  const moonsCategory = modelsData.find(model => model.category === 'moons');
  const location = useLocation();

  return (
    <div className="w-full text-center">
      <ul className={`text-white text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:h-[80vh] flex md:justify-evenly flex-col my-12 md:flex-row flex-wrap  items-center ${location.pathname.includes("/about/moons/") ? "hidden" : ""}`}>
        {moonsCategory.children.map(moon => (
          <li key={moon.id}>
            <div className="w-[15rem] md:w-[18rem] h-[23rem] my-6 lg:w-[25rem] lg:h-[35rem] blur__card parallax">
              <Link to={`/about/moons/${moon.id}`} className="flex flex-col h-full justify-between py-12">
                <img src={moon.cover} className={`${moon.id === "phobos" ? "lg:w-[13rem]" : "lg:w-[12.5rem] md:p-1 md:mb-0"} self-center w-[8rem] mb-2`}/>
                <span className="blink">{moon.name}</span>
            </Link>
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
export default Moons;

