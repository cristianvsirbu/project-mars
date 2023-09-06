import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModelsDataContext } from "../../models/modelsContext";



const Satellites = () => {
  const modelsData = useContext(ModelsDataContext);
  const satelliteCategory = modelsData.find(model => model.category === 'satellites');
  const location = useLocation();




  return (
    <div className="text-white text-2xl">
      <ul className={`${location.pathname.includes("/about/satellites/") ? "hidden" : ""}`}>
        {satelliteCategory.children.map(subcategory => (
          <li key={subcategory.subcategory}>
            <Link to={`/about/satellites/${subcategory.subcategory}`}>
              {subcategory.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};


export default Satellites