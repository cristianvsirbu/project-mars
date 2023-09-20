import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";



const SatellitesCategory = () => {
  const modelsData = useContext(ModelsDataContext);
  const satelliteCategory = modelsData.find(model => model.category === 'satellites');
  const location = useLocation();

  return (
    <div className="text-center">
      <ul
        className={`
        text-white
        text-3xl
        md:text-4xl
        lg:text-5xl
        text-center
        font-semibold
        lg:h-[80vh]
        flex
        md:justify-evenly
        flex-col
        my-12
        md:flex-row
        flex-wrap
        items-center
        ${location.pathname.includes("/about/satellites/") ? "hidden" : ""}
        `}>
        {satelliteCategory.children.map(subcategory => (
          <li key={subcategory.subcategory}>
            <div
              className="
              w-[15rem]
              md:w-[18rem]
              h-[23rem]
              md:h-[28rem]
              my-6 lg:w-[25rem]
              lg:h-[35rem]
              blur__card
              parallax
              ">
              <Link to={`/about/satellites/${subcategory.subcategory}`} className="flex flex-col h-full justify-between py-12">
                <img
                  src={subcategory.cover}
                  className="
                  w-[12rem]
                  md:w-[15rem]
                  lg:w-[20rem]
                  self-center
                  mb-4"
                  alt={subcategory.name}
                  loading="lazy" />
                <span className="blink">{subcategory.name}</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};


export default SatellitesCategory