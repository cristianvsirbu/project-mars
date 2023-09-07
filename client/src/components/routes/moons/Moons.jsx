import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ModelsDataContext } from "../../models/modelsContext";

const Moons = () => {
  const modelsData = useContext(ModelsDataContext);
  const moonsCategory = modelsData.find(model => model.category === 'moons');
  const location = useLocation();

  return (
    <div className=" text-center">
      <ul className={`text-white font-semibold text-5xl h-[80vh] w-[50vw] mx-auto flex  justify-evenly items-center ${location.pathname.includes("/about/moons/") ? "hidden" : ""}`}>
        {moonsCategory.children.map(moon => (
          <li key={moon.id}>
            <div className="w-[25rem] h-[35rem] blur__card parallax">
            <Link to={`/about/moons/${moon.id}`} className="flex flex-col h-full justify-around py-12">
              <img src={moon.cover} className="w-[12rem]  self-center" />
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

